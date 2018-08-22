import React from 'react';
// Helper Functions to help me do some grammatical checks
import { slots, freeBikes } from '../Utiliites';

const BikeStation = props => {
  const { name, free_bikes, empty_slots, timestamp } = props.station;
  return (
    <div className="stationed">
      <div className="stationName">{name}</div>
      <hr />
      <div className="bikeNumber">
        <span>
          <div className="stationNumber">{free_bikes}</div>
          <div className="stationTitle">{freeBikes(free_bikes)}</div>
        </span>
        <span>
          <div className="stationNumber">{empty_slots}</div>
          <div className="stationTitle">{slots(empty_slots)}</div>
        </span>
      </div>
      <hr />
      <div className="stationTimeStamp">{timestamp}</div>
    </div>
  );
};

export default BikeStation;
