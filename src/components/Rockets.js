import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/rocketAction';
import RocketTable from './RocketTable';
import '../style/rocket.css';

const Rockets = () => {
  const lists = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <div className="rocketContiner">
        {
          lists.map((item) => (<RocketTable rockets={item} key={item.id} />))
        }
      </div>
    </>
  );
};

export default Rockets;
