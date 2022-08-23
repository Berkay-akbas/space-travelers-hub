import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const {
    name,
    description,
  } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
};

export default MissionItem;

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
