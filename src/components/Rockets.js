import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/rockets/rocket';
import '../style/rocket.css';
import RocketItem from './RocketItem';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <>
      <div className="rocketContiner">
        {
          rockets.map((item) => (<RocketItem rockets={item} key={item.id} />))
        }
      </div>
    </>
  );
};

export default Rockets;
