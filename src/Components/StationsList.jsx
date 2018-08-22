import React, { Component, Fragment } from 'react';
import BikeStation from './Station';
import Loading from './Loading';

class StationsList extends Component {
  state = {
    loading: true,
    locationTag: null,
    bikeStations: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.citybik.es/v2/networks/${this.props.match.params.Id}`);
      const cityBikes = await res.json();
      setTimeout(() => {
        this.setState({
          bikeStations: cityBikes.network.stations,
          locationTag: cityBikes.network.name,
          loading: false,
        });
      }, 6000);
    } catch (error) {
      // to be determined
    }
  }

  render() {
    const { bikeStations, loading, locationTag } = this.state;
    return (
      <Fragment>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h1>
              {locationTag}
              <i className="fas fa-bicycle" />
            </h1>
            <div className="listStation">
              {bikeStations.map((station, idx) => <BikeStation key={idx} station={station} />)}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
export default StationsList;
