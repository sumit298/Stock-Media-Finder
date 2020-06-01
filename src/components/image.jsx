import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

export default function Image({ item }) {
  const classes = useStyles();
  const [dialog, setDialog] = useState({
    open: false,
    currentImg: "",
  });

  const handleClose = () => {
    setDialog({ open: false });
  };

  const handleClickOpen = (img) => {
    setDialog({ open: true, currentImg: img });
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        <GridListTile key={item.id} cols={2} rows={2}>
          <img src={item.largeImageURL} alt={item.id} />
          <GridListTileBar
            title={item.tags}
            titlePosition="top"
            actionIcon={
              <IconButton className={classes.icon}>
                <StarBorderIcon />
              </IconButton>
            }
            actionPosition="left"
            className={classes.titleBar}
          />
          <GridListTileBar
            title={<span>by {item.user}</span>}
            titlePosition="bottom"
            actionIcon={
              <IconButton
                onClick={() => handleClickOpen(item.largeImageURL)}
                className={classes.icon}
              >
                <ZoomOutMapIcon />
              </IconButton>
            }
            actionPosition="right"
            className={classes.titleBar}
          />
          <Dialog open={dialog.open} onClose={handleClose}>
            <img
              src={dialog.currentImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <Button onClick={handleClose} color="secondary">
              Close
            </Button>
          </Dialog>
        </GridListTile>
      </GridList>
    </div>
  );
}
