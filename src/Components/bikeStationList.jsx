import React, { Component } from 'react';
import BikeStation from './bikeStation';

class BikeStationList extends Component {
  state = {
    bikeStations: [],
  };

  async componentDidMount() {
    const res = await fetch('https://api.citybik.es/v2/networks/hubway');
    const cityBikes = await res.json();

    console.log('cityBikes.networks', cityBikes.network.name);
    console.log('cityBikes', cityBikes.network.stations);

    this.setState({
      bikeStations: cityBikes.network.stations,
    });
  }

  render() {
    const { bikeStations } = this.state;
    console.log('cityBikes Logged', bikeStations);

    return (
      <div>
        <h1>HUBWAY</h1>
        <div className="listStation">
          {bikeStations.map(station => (
            // <div className="stationed">
            //   <div className="stationName">{station.name}</div>
            //   <hr />
            //   <div className="bikeNumber">
            //     <span>
            //       <div className="stationNumber">{station.free_bikes}</div>
            //       <div className="stationTitle">FREE BIKES</div>
            //     </span>
            //     <span>
            //       <div className="stationNumber">{station.empty_slots}</div>
            //       <div className="stationTitle">EMPTY SLOTS</div>
            //     </span>
            //   </div>
            //   <hr />
            //   <div className="stationTimeStamp">{station.timestamp}</div>
            // </div>
            <BikeStation station={station} />
          ))}
        </div>
      </div>
    );
  }
}
export default BikeStationList;
