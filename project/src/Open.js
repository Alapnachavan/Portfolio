

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Open = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    border: '2px solid #333',
    borderRadius: '5px',
    backgroundColor: 'grey',
    color: '#fff',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    transition: 'color 0.3s, background-color 0.3s, transform 0.3s, box-shadow 0.3s',
  };

  const containerStyle = {
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundImage: 'url("https://e0.pxfuel.com/wallpapers/846/344/desktop-wallpaper-portfolio.jpg")',
    backgroundSize: 'cover',
  };

  const textStyles = {
    color: 'white',
  };

  const goToHome = () => {
    navigate('/Home');
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyles}>Welcome to my portfolio</h1>
      <h3 style={textStyles}>I'm a web developer specializing in modern, responsive webpages</h3>
      <button onClick={goToHome} style={buttonStyle}>
        Open
      </button>
    </div>
  );
};

export default Open;
