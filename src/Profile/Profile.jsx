// src/profile/Profile.js

import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2rem', margin: '1rem' }}>{fullName}</h1>
      {children}
      <p style={{ margin: '1rem' }}>{bio}</p>
      <p style={{ margin: '1rem' }}>{profession}</p>
      <button onClick={() => handleName(fullName)}>Show Name</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Profile.defaultProps = {
  fullName: 'Abir Bel Haj',
  bio: 'No bio available',
  profession: 'No profession available',
};

export default Profile;


