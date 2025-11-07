import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  navButton: {
    marginRight: 16,
    color: 'white',
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Stock Media Finder
        </Typography>
        <Button 
          component={Link} 
          to="/" 
          className={classes.navButton}
        >
          Images
        </Button>
        <Button 
          component={Link} 
          to="/videos" 
          className={classes.navButton}
        >
          Videos
        </Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
