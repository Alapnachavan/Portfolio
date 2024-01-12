// import React from "react";
// // import { Typography, Box, Paper } from '@mui/material';
// import { Typography, Box, Paper, Avatar } from '@mui/material';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// const Contact=()=>{
//     const imgStyle = {
//         display: 'block',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         marginTop: '20px', 
//         marginBottom: '20px', 
//         borderRadius: '50%', 
//         height:'400px',
//         width:'400px',
        
        
//       };
//     return(
//     <div>
//         <style>{`
//         body {
//           margin: 0;
//           padding: 0;
//           background-color: #d3d3d3;
//         }
//       `}</style>

//     <img
      
//       src={'https://img.freepik.com/premium-vector/businesswoman-avatar-cartoon-character-profile_18591-50143.jpg'}
//       style={imgStyle}
//     />
//     <Typography sx={{ textAlign: 'center', animation: 'fadeIn 7.5s ease-in-out', textShadow: '2px 2px 5px rgb(65, 69, 149)' }}>
//       <h2 sx={{ textAlign: 'center' }}>Front-End Magic in the Making - Contact Me!</h2>
//     </Typography>
//      <Typography sx={{ textAlign: 'center' }}>
//         <h3 >Name 👩‍💻<br/>
//             Alpana Dhananjay Chavan.</h3>
//         <h3>Work💻<br/>
//             currently working in meraki as Front-end developer.
//         </h3>
//         <h3>Email📩<br/>
//              alpanachavan20@navgurukul.org
//         </h3>
//     </Typography>
     
     
//       </div>
      
      
      
//     )
// };
// export default Contact;


import React from "react";
import { Typography, Box, Paper, Avatar } from '@mui/material';

const Contact = () => {
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

  const paperStyle = {
    padding: '20px',
    margin: '20px auto', // Center the paper
    maxWidth: '600px', // Limit the width for better readability
    background: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
    borderRadius: '15px',
  };

  return (
    <Box>
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
         <Typography sx={{ textAlign: 'center', animation: 'fadeIn 7.5s ease-in-out', textShadow: '2px 2px 5px rgb(65, 69, 149)', marginBottom: '20px' }}>
          <h2>Front-End Magic in the Making - Contact Me🤝🏻</h2>
        </Typography>

     

      <Paper elevation={3} sx={paperStyle}>
        <Typography sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3>
            Name 👩‍💻<br />
            Alpana Dhananjay Chavan.
          </h3>
          <h3>
            Work💻<br />
            Currently working at Meraki as a Front-end Developer.
          </h3>
          <h3> Contact Number📞<br />
            +91 9890422712
          </h3>
          <h3>
            Email📩<br />
            <a href="mailto:alpanachavan20@navgurukul.org">alpanachavan20@navgurukul.org</a>
          </h3>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Contact;
