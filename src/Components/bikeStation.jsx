import React from 'react';

const BikeStation = props => {
  const { name, free_bikes, empty_slots, timestamp } = props.station;
  return (
    <div className="stationed">
      <div className="stationName">{name}</div>
      <hr />
      <div className="bikeNumber">
        <span>
          <div className="stationNumber">{free_bikes}</div>
          <div className="stationTitle">FREE BIKES</div>
        </span>
        <span>
          <div className="stationNumber">{empty_slots}</div>
          <div className="stationTitle">EMPTY SLOTS</div>
        </span>
      </div>
      <hr />
      <div className="stationTimeStamp">{timestamp}</div>
    </div>
  );
};

export default BikeStation;
