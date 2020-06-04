import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar className="flex">
          <Typography variant="h6">Stock Image Finder</Typography>
          <Link to="/">
          <Typography variant="h6">Image</Typography>
          </Link>
          <Link to="/videos">
          <Typography variant="h6">Video</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
