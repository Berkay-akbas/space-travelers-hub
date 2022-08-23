import React from 'react';
import '../style/rocket.css';

const RocketTable = (rockets) => {
  // eslint-disable-next-line
  const { rocketName, description, image } = rockets.rockets;

  return (
    <>
      <section className="rocketContent">
        <img src={image} className="pic" alt={rocketName} />
        <div className="detail">
          <h1>{rocketName}</h1>
          <p className="description">{description}</p>
          <button type="button">Reserve Rockets</button>
        </div>
      </section>

    </>
  );
};

export default RocketTable;
