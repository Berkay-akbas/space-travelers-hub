import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/rockets/rocket';
import RocketItem from './RocketItem';
import '../style/rocket.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if(rockets.length === 0){
      dispatch(fetchData());
    }
  }, []);

  return (
    <>
      <div className="rocketContiner">
        {
          rockets.map((item) => (<RocketTable rockets={item} key={item.id} />))
        }
      </div>
    </>
  );
};

export default Rockets;
