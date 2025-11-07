import React from "react";
import Navbar from "./components/navbar";
import ImageList from "./components/imageList";
import "./App.css";
import PixabayVideoList from "./components/pixabayVideoList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CustomThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <Navbar />
        <Route path="/videos">
          <PixabayVideoList/>
        </Route>
        <Route path="/" exact>
          <ImageList/>
        </Route>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
