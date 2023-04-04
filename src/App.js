
import './App.css';
import React from 'react';
import Profile from './Profile/Profile';
import profileImg from './me.jpg';

function handleName(name) {
  alert(`The name of the profile user is ${name}`);
}

function App() {
  return (
    <div>
      <Profile
        fullName="Abir Bel Haj"
        bio="I am a Junior Web Developer. I graduated from GomyCode in 2023 with a bachelor's degree in Full-Stack Javascript Bootcamp. "
        profession="Full Stack Developer"
        handleName={handleName}
      >
        <img src={profileImg} alt="Profile" style={{ width: '200px', borderRadius: '50%' }} />
      </Profile>
    </div>
  );
}

export default App;