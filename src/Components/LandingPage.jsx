import React, { Component } from 'react';
import City from './City';

class LandingPage extends Component {
  state = {
    placeholder: 'Search for bikes in any location around the world',
    cityBikes: [],
    searchedLocation: '',
  };

  async componentDidMount() {
    const res = await fetch('https://api.citybik.es/v2/networks');
    const cityBikes = await res.json();

    console.log('cityBikes.networks', cityBikes.networks);
    console.log('cityBikes', cityBikes.networks);
    const bikesUSA = cityBikes.networks.filter(item => item.location.country === 'US').sort();

    this.setState({
      cityBikes: bikesUSA,
    });
  }

  handleSearch = e => {
    this.setState({
      searchedLocation: e.target.value,
    });
  };

  render() {
    // console.log('searchedLocation', this.state.searchedLocation);
    console.log('cityBikes Logged', this.state.cityBikes);
    return (
      <div className="app">
        <p>The world's biggest bike depot</p>
        <input
          type="search"
          name=""
          id=""
          placeholder={this.state.placeholder}
          onChange={this.handleSearch}
        />
        <div>
          {this.state.cityBikes.length === 0 ? (
            <p>search for a location</p>
          ) : (
            <div className="list">
              {this.state.cityBikes.map((item, idx) => (
                // <div className="listItem" key={idx}>
                //   {item.location.city}
                // </div>
                <City item={item} key={idx} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LandingPage;
