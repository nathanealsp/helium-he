import React, { Component } from 'react';
import City from './City';
import Loading from './Loading';

class LandingPage extends Component {
  state = {
    loading: true,
    placeholder: 'Search for bikes in any location around the world',
    cityBikes: [],
  };

  async componentDidMount() {
    const res = await fetch('https://api.citybik.es/v2/networks');
    const cityBikes = await res.json();
    const bikesUSA = cityBikes.networks.filter(item => item.location.country === 'US');

    this.setState({
      cityBikes: bikesUSA,
      loading: true,
    });
  }

  render() {
    const { cityBikes, loading } = this.state;
    return (
      <div className="app">
        <p>The world's biggest bike depot</p>
        <p>Choose your City </p>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div className="list">
              {cityBikes.map((item, idx) => <City item={item} key={idx} />)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LandingPage;
