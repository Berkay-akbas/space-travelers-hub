import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMissions, leaveMissions } from '../redux/missions/missions';

const MissionItem = (props) => {
  const {
    name,
    description,
    id,
    reserved,
  } = props;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (!reserved) {
      dispatch(joinMissions(e.target.id));
    } else {
      dispatch(leaveMissions(e.target.id));
    }
  };

  return (
    <tr className="content-table">
      <td className="name-table">{name}</td>
      <td className="description-table">{description}</td>
      <td className="status-table">
        {!reserved && (
        <p>NOT A MEMBER</p>
        )}
        {reserved && (
          <p style={{ background: '#18A2B9' }}>ACTIVE MEMBER</p>
        )}
      </td>
      <td className="join-table">
        {!reserved && (
        <button type="button" className="join-button" onClick={handleClick} id={id}>Join Mission</button>
        )}
        {reserved && (
          <button type="button" className="join-button" onClick={handleClick} id={id} style={{ borderColor: 'rgb(220,54,69)', color: 'rgb(220,54,69)' }}>Leave Mission</button>
        )}
      </td>
    </tr>
  );
};

export default MissionItem;

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
