import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { FormControl, InputLabel } from "@material-ui/core";

// Sanitize user input to prevent XSS
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>"'&]/g, (match) => {
      const entities = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entities[match];
    })
    .trim();
};

function Search(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
  }));
  const classes = useStyles();
  // console.log(props.onKeyPressHandle);

  return (
    <div>
      <div className={classes.root}>
        <div className="flex textfield">
          <TextField
            id="standard-full-width"
            name="searchText"
            value={sanitizeInput(props.search)}
            onKeyPress={props.onKeyPressHandle}
            onChange={(e) => {
              const sanitizedValue = sanitizeInput(e.target.value);
              const syntheticEvent = {
                ...e,
                target: { ...e.target, value: sanitizedValue }
              };
              props.SearchHandle(syntheticEvent);
            }}
            style={{ margin: 24 }}
            placeholder="Search for Media"
            InputLabelProps={{
              shrink: true,
            }}
          ></TextField>
          <Button
           
            onClick={props.clickSearchFunction}
            variant="contained"
            color="secondary"
          >
            Search
          </Button>
        </div>
        <div className="flex margin">
          <FormControl style={{ margin: 24, minWidth: 120 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={props.category || 'all'}
              onChange={props.CategoryHandle}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="photo">Photos</MenuItem>
              <MenuItem value="illustration">Illustrations</MenuItem>
              <MenuItem value="vector">Vectors</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ margin: 24, minWidth: 120 }}>
            <InputLabel>Amount</InputLabel>
            <Select
              value={props.select}
              onChange={props.SelectHandle}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Search;
