import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">Stock Image Finder</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
