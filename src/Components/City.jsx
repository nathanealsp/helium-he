import React from 'react';
import { Link } from 'react-router-dom';

const City = props => {
  const {
    id,
    location: { city },
  } = props.item;

  return (
    <div className="listItem">
      <Link to={`/${id}`}>{city}</Link>
    </div>
  );
};

export default City;
