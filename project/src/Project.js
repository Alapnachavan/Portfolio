import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from '@mui/system';
const Project = () => {
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
  return (
    <div>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #d3d3d3;
        }
      `}</style>
      <img
      
      src={'https://static.vecteezy.com/system/resources/previews/003/815/991/original/female-programmer-doing-software-coding-free-vector.jpg'}
      style={imgStyle}
    />
       <Typography sx={{ textAlign: 'center', animation: 'fadeIn 7.5s ease-in-out', textShadow: '2px 2px 5px rgb(65, 69, 149)',marginBottom: '100px'  }}>
      <h2 sx={{ textAlign: 'center' }}> "Innovation in Every Line of Code."</h2>
    </Typography>
   
      <Typography sx={{textAlign:'center'}}>
        <h2>Web Scrapping(Python)</h2>
        <h4>In this project scrap only 250 Bollywood movies data, and their all details like (Cast, Language, Country and all). </h4>
        <Button variant="contained" href="https://github.com/Alapnachavan/webscrapping"  style={{ marginRight: '10px',backgroundColor: 'transparent', 
    color: 'white', 
    border: '1px solid #808080', marginBottom:'40px'}}>
        GitHub
      </Button>
      <Button variant="contained" href="https://yourliveprojecturl.com" style={{ backgroundColor: '#818589' ,marginBottom:'40px'}}>
        Live Project
      </Button>
    </Typography>

    <Typography sx={{textAlign:'center'}}>
        <h2>Request (Javascript) </h2>
        <h4>To obtain the Meraki data, we need to incorporate code into this project. </h4>
        <Button variant="contained" href="https://github.com/Alapnachavan/Request-In-Javascript"  style={{ marginRight: '10px',backgroundColor: 'transparent', 
    color: 'white', 
    border: '1px solid #808080', marginBottom:'40px' }}>
        GitHub
      </Button>
      <Button variant="contained" href="https://yourliveprojecturl.com" style={{ backgroundColor: '#818589',marginBottom:'40px'}}>
        Live Project
      </Button>
    </Typography>

    <Typography sx={{textAlign:'center'}}>
        <h2>Amazon Home Page </h2>
        <h4>Created Amazon home page through this project</h4>
        <Button variant="contained" href="https://github.com/Alapnachavan/Amazon-HomePage" style={{ marginRight: '10px' ,backgroundColor: 'transparent', 
    color: 'white', 
    border: '1px solid #808080',marginBottom:'40px' }}>
        GitHub
      </Button>
      <Button variant="contained" href="https://yourliveprojecturl.com" style={{ backgroundColor: '#818589',marginBottom:'40px'}}>
        Live Project
      </Button>
    </Typography>

    <Typography sx={{textAlign:'center'}}>
        <h2>React Movie_Project</h2>
        <h4>This project is developed using next Js, and data was fetched for its implementation.</h4>
        <Button variant="contained" href="https://github.com/Alapnachav an/movie_project "  style={{ marginRight: '10px', backgroundColor: 'transparent', 
    color: 'white', 
    border: '1px solid #808080',marginBottom:'40px' }}>
        GitHub
      </Button>
      <Button variant="contained" href="https://yourliveprojecturl.com" style={{ backgroundColor: '#818589',marginBottom:'40px'}}>
        Live Project
      </Button>
    </Typography>

    <Typography sx={{textAlign:'center'}}>
        <h2>movie theater</h2>
        <h4>Do you like movie? so i create website which is provide you movie infomation. i did  this project help of mui and react.js</h4>
        <Button variant="contained" href="https://github.com/Alapnachavan/random-project "  style={{ marginRight: '10px' , backgroundColor: 'transparent', 
    color: 'white', 
    border: '1px solid #808080', marginBottom:'40px'}}>
        GitHub
      </Button>
      <Button variant="contained" href="https://yourliveprojecturl.com" style={{ backgroundColor: '#818589',marginBottom:'40px'}}>
        Live Project
      </Button>
    </Typography>

    <Typography sx={{textAlign:'center', }}>
        <h2> Acadmic Hub</h2>
        <h4>It's one of the learning platforms that we created as a group. It helps students make progress in their studies.</h4>
        <Button variant="contained" href="https://github.com/roshni2003/larners " style={{ marginRight: '10px', backgroundColor: 'transparent', 
    color: 'white', 
    border: '1px solid #808080', marginBottom:'40px' }}>
        GitHub
      </Button>
      <Button variant="contained" href="https://yourliveprojecturl.com"  style={{ backgroundColor: '#818589',marginBottom:'40px'}}>
        Live Project
      </Button>
    </Typography>


    </div>
  );
};

export default Project;

