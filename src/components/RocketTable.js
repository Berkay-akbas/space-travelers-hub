import React from 'react';
import '../style/rocket.css';

const RocketTable = ({ rockets }) => {
  const { rocket_name, description, image } = rockets;

  return (
    <>
      <section className="rocketContent">
        <img src={image} className="pic" alt={rocket_name} />
        <div className="detail">
          <h1>{rocket_name}</h1>
          <p className="description">{description}</p>
          <button type="button">Reserve Rockets</button>
        </div>
      </section>

    </>
  );
};

export default RocketTable;
