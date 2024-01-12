import React from "react";
// import { Typography, Box, Paper } from '@mui/material';
import { Typography, Box, Paper, Avatar } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Contact=()=>{
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
        <style>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #d3d3d3;
        }
      `}</style>

    <img
      
      src={'https://img.freepik.com/premium-vector/businesswoman-avatar-cartoon-character-profile_18591-50143.jpg'}
      style={imgStyle}
    />
    <Typography sx={{ textAlign: 'center', animation: 'fadeIn 7.5s ease-in-out', textShadow: '2px 2px 5px rgb(65, 69, 149)' }}>
      <h2 sx={{ textAlign: 'center' }}>Front-End Magic in the Making - Contact Me!</h2>
    </Typography>
     <Typography sx={{ textAlign: 'center' }}>
        <h3 >Name 👩‍💻<br/>
            Alpana Dhananjay Chavan.</h3>
        <h3>Work💻<br/>
            currently working in meraki as Front-end developer.
        </h3>
        <h3>Email📩<br/>
             alpanachavan20@navgurukul.org
        </h3>
        {/* <h3>GitHub Id <br/>
        Alapnachavan
             
        </h3>
        <h3>LinkedIn Id <br/>
        alpana chavan
        </h3> */}
    </Typography>
     
     
      </div>
      
      
      
    )
};
export default Contact;

