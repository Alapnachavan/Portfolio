

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Open = () => {
//   const navigate = useNavigate();

//   const buttonStyle = {
//     padding: '10px 20px',
//     fontSize: '18px',
//     border: '2px solid #333',
//     borderRadius: '5px',
//     backgroundColor: 'grey',
//     color: '#fff',
//     boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
//     transition: 'color 0.3s, background-color 0.3s, transform 0.3s, box-shadow 0.3s',
//   };

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     textAlign: 'center',
//     backgroundImage: 'url("https://e0.pxfuel.com/wallpapers/846/344/desktop-wallpaper-portfolio.jpg")',
//     backgroundSize: 'cover',
//     opacity: 0, 
//     transition: 'opacity 1s ease-in-out', 
//   };

//   const textStyles = {
//     color: 'white',
//   };

//   const goToHome = () => {
//     navigate('/Home');
//   };

//   // Use useEffect to trigger the fade-in effect once the component mounts
//   React.useEffect(() => {
//     setTimeout(() => {
//       document.getElementById('portfolio-container').style.opacity = 1;
//     }, 500); // Adjust the delay as needed
//   }, []);

//   return (
//     <div style={containerStyle} id="portfolio-container">
//       <h1 style={textStyles}>Welcome to my portfolio</h1>
//       <h3 style={textStyles}>I'm a web developer specializing in modern, responsive webpages</h3>
//       <button onClick={goToHome} style={buttonStyle}>
//         Open
//       </button>
//     </div>
//   );
// };

// export default Open;

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
    opacity: 0,
    transition: 'opacity 1s ease-in-out', // Fade-in transition
  };

  const textStyles = {
    color: 'white',
    transform: 'scale(0.8)', // Initial scale
    transition: 'transform 0.5s ease-in-out', // Scale animation
  };

  const goToHome = () => {
    navigate('/Home');
  };

  React.useEffect(() => {
    setTimeout(() => {
      document.getElementById('portfolio-container').style.opacity = 1;
      document.getElementById('portfolio-text').style.transform = 'scale(1)';
    }, 500);
  }, []);

  return (
    <div style={containerStyle} id="portfolio-container">
      <h1 style={{ ...textStyles, marginBottom: '20px' }} id="portfolio-text">
        Welcome to my portfolio
      </h1>
      <h3 style={textStyles}>I'm a web developer specializing in modern, responsive webpages</h3>
      <button onClick={goToHome} style={buttonStyle}>
        Open
      </button>
    </div>
  );
};

export default Open;

