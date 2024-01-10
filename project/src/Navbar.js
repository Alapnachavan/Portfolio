import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// export default function ButtonAppBar() {
const Navbar =()=>{
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ height: '200px', backgroundColor: '#808080' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ALPANA CHAVAN 
          </Typography>
          
          <Tabs textColor="inherit">
            <Tab label="Project" />
            <Tab label="Blog" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;