import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const {
    name,
    description,
  } = props;

  return (
    <tr className="content-table">
      <td className="name-table">{name}</td>
      <td className="description-table">{description}</td>
      <td className="status-table">
        <p>NOT A MEMBER</p>
      </td>
      <td className="join-table">
        <button type="button" className="join-button">Join Mission</button>
      </td>
    </tr>
  );
};

export default MissionItem;

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
