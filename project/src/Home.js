
// import React from "react";
// import Navbar from "./Navbar";
// import { Typography } from "@mui/material";
// import Button from '@mui/material/Button';
// import Footer from "./Fotter";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const imgStyle = {
//     display: 'block',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     marginTop: '20px', 
//     marginBottom: '20px', 
//     borderRadius: '50%', 
//     height: '400px',
//     width: '400px',
//     animation: 'zoomIn 1s ease-in-out',
//   };

//   return (
//     <div>
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes zoomIn {
//           from { transform: scale(0.5); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//       `}</style>

//       <Navbar />

//       <img
//         src={'https://www.21kschool.com/blog/wp-content/uploads/2023/04/Girls-coding-myth.png'}
//         style={imgStyle}
//       />

//       <Typography sx={{ textAlign: 'center', animation: 'fadeIn 1s ease-in-out', textShadow: '2px 2px 5px rgb(65, 69, 149)', marginBottom: '100px' }}>
//         <h2 sx={{ textAlign: 'center' }}> I'm a passionate front-end developer dedicated to user-centric and responsive websites.</h2>
//       </Typography>

//       <Typography sx={{ textAlign: 'center', animation: 'fadeIn 1s ease-in-out', marginBottom: '40px' }}>
//         <h2>About Me</h2>
//         <h4>
//           With a background in Bcom, I discovered my love for web development.
//           <br />
//           I thrive on turning creative ideas into functional and visually appealing websites. My expertise lies in HTML, CSS, JavaScript, and modern frameworks like React.
//         </h4>
//       </Typography>

//       <Typography sx={{ textAlign: 'center', animation: 'fadeIn 1s ease-in-out' }}>
//         <h2>Projects</h2>
//         <h4>
//           Explore a curated selection of my projects below.
//           <br />
//           Each one showcases my commitment to delivering high-quality and responsive web solutions.
//         </h4>
//         <Button component={Link} to="/Project" variant="contained" style={{ backgroundColor: '#808080', color: 'white', marginBottom: '40px' }}>
//           View Projects
//         </Button>
//       </Typography>

//       <Typography sx={{ textAlign: 'center', animation: 'fadeIn 1s ease-in-out' }}>
//         <h2>Blog</h2>
//         <h4>
//           I'm also working on some technical and non-technical blogs. I like to document my journey of learning.
//         </h4>
//         <Button component={Link} to="/Blog" variant="contained" style={{ backgroundColor: '#808080', color: 'white', marginBottom: '100px' }}>
//           View Blog
//         </Button>
//       </Typography>

//       <Footer />
//     </div>
//   );
// };

// export default Home;


import React from "react";
import Navbar from "./Navbar";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Footer from "./Fotter";
import { Link } from "react-router-dom";

const Home = () => {
  const imgStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px', 
    marginBottom: '20px', 
    borderRadius: '50%', 
    height: '400px',
    width: '400px',
    animation: 'zoomIn 1s ease-in-out', // Add zoom-in animation to the image
  };

  return (
    <div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes fadeInButton {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes infiniteFadeInButton {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>

      <Navbar />

      <img
        src={'https://www.21kschool.com/blog/wp-content/uploads/2023/04/Girls-coding-myth.png'}
        style={imgStyle}
      />

      <Typography sx={{ textAlign: 'center', animation: 'fadeIn 1s ease-in-out', textShadow: '2px 2px 5px rgb(65, 69, 149)', marginBottom: '100px' }}>
        <h2 sx={{ textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap', animation: 'typing 2s steps(30, end) infinite' }}>
          I'm a passionate front-end developer dedicated to user-centric and responsive websites.
        </h2>
      </Typography>

      <Typography sx={{ textAlign: 'center', animation: 'fadeIn 1s ease-in-out', marginBottom: '40px' }}>
        <h2>About Me</h2>
        <h4>
          With a background in Bcom, I discovered my love for web development.
          <br />
          I thrive on turning creative ideas into functional and visually appealing websites. My expertise lies in HTML, CSS, JavaScript, and modern frameworks like React.
        </h4>
      </Typography>

      <Typography sx={{ textAlign: 'center', animation: 'fadeIn 1s ease-in-out' }}>
        <h2>Projects</h2>
        <h4>
          Explore a curated selection of my projects below.
          <br />
          Each one showcases my commitment to delivering high-quality and responsive web solutions.
        </h4>
        <Button component={Link} to="/Project" variant="contained" style={{ backgroundColor: '#808080', color: 'white', marginBottom: '40px', animation: 'infiniteFadeInButton 1s ease-in-out infinite' }}>
          View Projects
        </Button>
      </Typography>

      <Typography sx={{ textAlign: 'center', animation: 'fadeIn 1s ease-in-out' }}>
        <h2>Blog</h2>
        <h4>
          I'm also working on some technical and non-technical blogs. I like to document my journey of learning.
        </h4>
        <Button component={Link} to="/Blog" variant="contained" style={{ backgroundColor: '#808080', color: 'white', marginBottom: '100px', animation: 'infiniteFadeInButton 1s ease-in-out infinite' }}>
          View Blog
        </Button>
      </Typography>

      <Footer />
    </div>
  );
};

export default Home;

