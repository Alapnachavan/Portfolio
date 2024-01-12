

import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const githubLink = 'https://github.com/Alapnachavan?tab=repositories';
    const LinkedIn ='https://www.linkedin.com/in/alpana-chavan-b1b0b3258/';
    const Twitter='https://twitter.com/Alpana_Chavan';

  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px' }}>
      <div>
        <i>Connect with me on social media.</i><br/>
          <IconButton href={githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ color: '#fff', fontSize: 30 }} />
          </IconButton>
          <IconButton href={LinkedIn} target='_blank' rel="noopener noreferrer">
            <LinkedInIcon style={{ color: '#fff', fontSize: 30 }} />
          </IconButton>
          <IconButton href={Twitter} target='_blank' rel="noopener noreferrer">
            <TwitterIcon style={{ color: '#fff', fontSize: 30 }} />
          </IconButton>
          <h4>THANK YOU 🤍</h4>
      </div>

    </footer>
  );
};

export default Footer;



