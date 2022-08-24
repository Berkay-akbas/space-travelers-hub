import React from 'react';
import { useSelector } from 'react-redux';
import '../style/profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);

  const filtered = missions.filter((val) => val.reserved === true);

  return (
    <div className="Profile-Container">
      <div className="missionsProfile">
        <h1>My Missions</h1>
        <ul>
          {filtered.map((val) => (
            <li key={val.mission_id}>{val.mission_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
