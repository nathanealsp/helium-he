import React from 'react';
import { Link } from 'react-router-dom';

const City = props => {
  const { id } = props.item;
  const { city } = props.item.location;

  return (
    <div className="listItem">
      {console.log(id)}
      <Link to={`/${id}`}> {city}</Link>
    </div>
  );
};

export default City;
