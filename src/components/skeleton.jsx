import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  skeleton: {
    backgroundColor: "#e0e0e0",
    borderRadius: "4px",
    animation: "$pulse 1.5s ease-in-out infinite",
  },
  "@keyframes pulse": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0.4,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export default function Skeleton({ width = "100%", height = "100%" }) {
  const classes = useStyles();
  
  return (
    <div 
      className={classes.skeleton} 
      style={{ width, height }}
    />
  );
}