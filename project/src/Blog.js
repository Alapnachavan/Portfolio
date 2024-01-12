// import React from "react";
// import { Typography } from "@mui/material";
// const Blog=()=>{
//     const imgStyle = {
//         display: 'block',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         marginTop: '20px', 
//         marginBottom: '20px', 
//         borderRadius: '50%', 
//         height:'400px',
//         width:'400px',
        
        
//     };
    
//     return(
//         <div>
//              <style>{`
//         body {
//           margin: 0;
//           padding: 0;
//           background-color: #d3d3d3;
//         }
//       `}</style>
//         <img
      
//       src={'https://media.istockphoto.com/id/1392896428/photo/inspirational-quote.jpg?s=612x612&w=0&k=20&c=CbqPLlx65768zd6QQpJqo55MZIAhA_o68cS0nLIfjw0='}
//       style={imgStyle}
//     />
//     <Typography sx={{ textAlign: 'center', animation: 'fadeIn 7.5s ease-in-out', textShadow: '2px 2px 5px rgb(65, 69, 149)',marginBottom: '100px'  }}>
//       <h2 sx={{ textAlign: 'center' }}> "Empower the Possible: Unleashing Potential, Igniting Passion, and Embracing Success!"</h2>
//     </Typography>

//     <h3 style={{ textAlign: 'center' }}>
//     "I watched a video of Priyanka Chopra and gained valuable insights. The video was not only engaging but also filled with wisdom, teaching me numerous things. <br/>
//     It's incredible how a single video can be a source of inspiration and learning."<br/>
//   Whenever I feel low, I watch this video. We think that problems are big, but it is not like that; many people are facing problems more significant than us. <br/>
//   So, we have to decide how to get out of this. And we should move on and enjoy our life.
// </h3>

//         </div>
//     );
// };
// export default Blog;


import React from "react";
import { Typography } from "@mui/material";

const Blog = () => {
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
      
      {/* Image */}
      <img
        src={'https://media.istockphoto.com/id/1392896428/photo/inspirational-quote.jpg?s=612x612&w=0&k=20&c=CbqPLlx65768zd6QQpJqo55MZIAhA_o68cS0nLIfjw0='}
        style={imgStyle}
      />

      {/* Motivational Quote */}
      <Typography sx={{ textAlign: 'center', animation: 'fadeIn 7.5s ease-in-out', textShadow: '2px 2px 5px rgb(65, 69, 149)', marginBottom: '100px' }}>
        <h2 sx={{ textAlign: 'center' }}> "Empower the Possible: Unleashing Potential, Igniting Passion, and Embracing Success!"</h2>
      </Typography>

      {/* Embed YouTube Video */}
      <div style={{ textAlign: 'center' }}>
        <iframe
          width="560"
          height="315"
        //   src="https://youtu.be/oHWegArQvsE?si=BRkWtg_AQ_sytIiu&t=3"
        src="https://www.youtube.com/embed/edIctUyd4RQ"

          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      {/* Blog Content */}
      <h3 style={{ textAlign: 'center' }}>
        "I watched a video of Priyanka Chopra and gained valuable insights. The video was not only engaging but also filled with wisdom, teaching me numerous things. <br/>
        It's incredible how a single video can be a source of inspiration and learning."<br/>
        Whenever I feel low, I watch this video. We think that problems are big, but it is not like that; many people are facing problems more significant than us. <br/>
        So, we have to decide how to get out of this. And we should move on and enjoy our life.
      </h3>
      <h2  style={{ textAlign: 'center', marginBottom:'60px', marginTop:'30px' }}>"Embrace the Grind, Cherish the Journey: Enjoying Life's Symphony of Hard Work and Success."</h2>
    </div>
  );
};

export default Blog;
