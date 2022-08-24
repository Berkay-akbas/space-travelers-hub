import React from 'react';
import { useDispatch } from 'react-redux';
import '../style/rocket.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { reserveRocket, cancelReserve } from '../redux/rockets/rocket';

const RocketItem = (rockets) => {
  // eslint-disable-next-line
  const { id , rocketName, description, image , reserved} = rockets.rockets;
  const dispatch = useDispatch();

  const handelReserve = (e) => {
    e.preventDefault();
    dispatch(reserveRocket(id));
  };

  const handelCancel = (e) => {
    e.preventDefault();
    dispatch(cancelReserve(id));
  };

  return (
    <>
      <section className="rocketContent">
        <img src={image} className="pic" alt={rocketName} />
        <div className="detail">
          <h1>{rocketName}</h1>

          <p className="description">
            {reserved && (
              <span className="label">Reserved</span>
            )}

            {description}
          </p>

          {!reserved && (
          <button type="button" className="btn btn-md btn-primary" onClick={handelReserve}>Reserve Rocket</button>
          )}
          {reserved && (
          <button type="button" className="btn btn-md btn-default" onClick={handelCancel}>Cancel Reservation</button>
          )}

        </div>
      </section>

    </>
  );
};

export default RocketItem;
