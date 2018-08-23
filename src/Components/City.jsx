import React from 'react';
import { Link } from 'react-router-dom';

const City = props => {
  const {
    id,
    location: { city },
  } = props.item;

  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <div className="listItem">{city}</div>
    </Link>
  );
};

export default City;
