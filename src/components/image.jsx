import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Skeleton from "./skeleton";

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
    transform: "translateZ(0)",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [dialog, setDialog] = useState({
    open: false,
    currentImg: "",
  });
  const [detailsDialog, setDetailsDialog] = useState(false);

  const handleClose = () => {
    setDialog({ open: false });
  };

  const handleClickOpen = (img) => {
    setDialog({ open: true, currentImg: img });
  };

  const handleDetailsOpen = () => {
    setDetailsDialog(true);
  };

  const handleDetailsClose = () => {
    setDetailsDialog(false);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        <GridListTile key={item.id} cols={2} rows={2}>
          <div className={classes.imageContainer}>
            {!imageLoaded && (
              <Skeleton width="100%" height="100%" />
            )}
            <img 
              src={item.largeImageURL} 
              alt={item.tags}
              onLoad={() => setImageLoaded(true)}
              style={{ display: imageLoaded ? 'block' : 'none' }}
            />
          </div>
          <GridListTileBar
            title={item.tags}
            titlePosition="top"
            actionIcon={
              <IconButton className={classes.icon} onClick={handleDetailsOpen}>
                <InfoIcon />
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
          
          <Dialog open={detailsDialog} onClose={handleDetailsClose}>
            <DialogTitle>Image Details</DialogTitle>
            <DialogContent>
              <Typography><strong>Tags:</strong> {item.tags}</Typography>
              <Typography><strong>User:</strong> {item.user}</Typography>
              <Typography><strong>Views:</strong> {item.views?.toLocaleString()}</Typography>
              <Typography><strong>Downloads:</strong> {item.downloads?.toLocaleString()}</Typography>
              <Typography><strong>Resolution:</strong> {item.imageWidth} x {item.imageHeight}</Typography>
              <Typography><strong>File Size:</strong> {Math.round(item.imageSize / 1024)} KB</Typography>
              <Typography><strong>Type:</strong> {item.type}</Typography>
              <Button onClick={handleDetailsClose} color="secondary" style={{marginTop: 16}}>
                Close
              </Button>
            </DialogContent>
          </Dialog>
        </GridListTile>
      </GridList>
    </div>
  );
}
