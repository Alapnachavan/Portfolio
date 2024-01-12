

// import React from "react";
// // import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Open from "./open";
// import Home from "./Home";

// const Routing = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" component={Open} />
//         <Route path="/Home" component={Home} />
//       </Switch>
//     </BrowserRouter>
//   );
// };

// export default Routing;


// import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import Open from "./open.js";
// import Home from "./Home.js";

// const Routing = () => {
//   return (
//     <BrowserRouter>
//       <Route exact path="/" component={Open} />
//       <Route path="/Home" component={Home} />
//     </BrowserRouter>
//   );
// };

// export default Routing;

// Routing.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Open from './Open';
import Home from './Home';
import Project from './Project';
import Blog from './Blog';
import Resume from './Resume';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Open />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Project" element={<Project/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;
