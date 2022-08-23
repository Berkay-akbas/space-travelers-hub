import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import MissionItem from './MissionItem';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>empty</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((val) => (
            <MissionItem
              key={val.mission_id}
              name={val.mission_name}
              description={val.description}
              id={val.mission_id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
