import React  from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button'
import { Typography } from "@material-ui/core";


function Search(props) {
  
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
  }));
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.root}>
        <div className="flex textfield">
        <TextField
          id="standard-full-width"
          name="searchText"
          value={props.search}
          onChange={props.SearchHandle}
          style={{ margin: 24 }}
          placeholder="Search for Images"
          
          InputLabelProps={{
            shrink: true,
          }}
        >

          </TextField>
        <Button onClick={props.clickSearchFunction} variant="contained" color="secondary">Search</Button>
        </div>
        <div className="flex margin">
        <Typography variant="h6">Amount:</Typography>
        <Select
          style={{margin:24}}
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={props.select}
          onChange={props.SelectHandle}
          className={classes.selectEmpty}
        >
          
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        </div>
      </div>
    </div>
  );
}

export default Search;
