

import React from "react";
import Navbar from "./Navbar";
import { Typography } from "@mui/material";

const Home= ()=>{
  const imgStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px', 
    marginBottom: '20px', 
    borderRadius: '50%', 
    height:'400px',
    width:'400px',
    
    
  };
  return(
    <div>
      <Navbar />
      
      <img
        // src={'https://www.shutterstock.com/image-vector/young-woman-writes-code-on-260nw-1731157933.jpg'}
        src={'https://www.21kschool.com/blog/wp-content/uploads/2023/04/Girls-coding-myth.png'}
        style={imgStyle}
      />
      <Typography  sx={{ textAlign: 'center' }}>
          <h3>I'm a passionate front-end developer dedicated touser-centric and responsive  websites.</h3>
      </Typography>
      <Typography sx={{textAlign:'center'}}>
          <h2 style={{ textDecoration: 'underline' }}>
              About Me
          </h2>
          <h3>
              With a background in Bcom, I discovered my love for web development.
                  <br/>
              I thrive on turning creative ideas into functional and visually appealing websites. My expertise lies in HTML, CSS, JavaScript, and modern frameworks like React.
          </h3>
      </Typography>

      <Typography sx={{textAlign:'center'}}>
          <h2 style={{ textDecoration: 'underline' }}>
              project 
          </h2>
          <h3>
              Explore a curated selection of my projects below.
                  <br/>
              Each one showcases my commitment to delivering high-quality and responsive web solutions. From e-commerce platforms to interactive portfolios,
                  <br/>
              these projects highlight my versatility and attention to detail.
          </h3>
      </Typography>


      
  </div>
    


  );

};
export default Home;