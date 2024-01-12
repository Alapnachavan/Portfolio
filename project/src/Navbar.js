// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { Link } from 'react-router-dom';
// const Navbar = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ height: '200px', backgroundColor: '#333' }}>
//         <Toolbar>
//           <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
//             ALPANA CHAVAN<br/>
//             {/* <h6currently working in meraki as front-end developer</h6> */}
//           </Typography>
          

//           <Tabs textColor="inherit">
//             {/* <Tab label="Project" />
//             <Tab label="Blog" /> */}
//             {/* <Tab label={<Link to="/">Project</Link>} /> */}
//             {/* <Tab label={<Link to="/Blog">Blog</Link>} /> */}
//             <Tab label={<Link to="/Resume">Resume</Link>} />
//             <Tab label={<Link to="/Contact">Contact</Link>} />
//           </Tabs>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };
// export default Navbar;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '200px', backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ALPANA CHAVAN .<br/>
          </Typography>

          <Tabs textColor="inherit">
            <Tab label={
              <Button component={Link} to="/Resume" color="inherit" variant="text">
                Resume
              </Button>
            } />
            <Tab label={
              <Button component={Link} to="/Contact" color="inherit" variant="text">
                Contact
              </Button>
            } />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
