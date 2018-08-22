import React, { Component, Fragment } from 'react';
import BikeStation from './bikeStation';

class BikeStationList extends Component {
  state = {
    loading: true,
    bikeStations: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://api.citybik.es/v2/networks/hubway');
      console.log(res);
      const cityBikes = await res.json();
      setTimeout(() => {
        this.setState({
          bikeStations: cityBikes.network.stations,
          loading: false,
        });
      }, 6000);
    } catch (error) {}
  }

  render() {
    const { bikeStations, loading } = this.state;
    console.log(bikeStations);

    return (
      <Fragment>
        {loading ? (
          <div className="spinner">
            <h1>
              <i className="fa fa-bicycle fa-pulse fa-3x fa-fw" />
            </h1>
            <p className="">Loading Please wait...</p>
          </div>
        ) : (
          <div>
            <h1>
              Hubway
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
export default BikeStationList;
