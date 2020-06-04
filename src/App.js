import React from "react";
import Navbar from "./components/navbar";
import ImageList from "./components/imageList";
import "./App.css";
import VideoList from "./components/videolist";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  
 
  return (
    <div>
      <Router>
        <Navbar />
       
        <Route path="/videos">
          <VideoList/>;
        </Route>
        <Route path="/" exact>
          <ImageList/>
        </Route> 
       
      </Router>
    </div>
  );
}

export default App;
