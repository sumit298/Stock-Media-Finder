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
          <Typography className="size" variant="h6">Stock Media Finder</Typography>
          <div className="navs">
          <Link className="links" to="/">
          <Typography variant="h6">Images</Typography>
          </Link>
          <Link className="links size" to="/videos">
          <Typography variant="h6">Videos</Typography>

          </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
