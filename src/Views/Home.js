import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootMain}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <div style={{ background: "#9c27b0", height: "92vh", width: "100%" }}>
            <div className={classes.root}>
              <Paper className={classes.paperHeader}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar>W</Avatar>
                  </Grid>
                  <Grid item xs zeroMinWidth>
                    <Typography noWrap>{message}</Typography>
                  </Grid>
                </Grid>
              </Paper>

              <Paper className={classes.paperHeader}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar>W</Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography>{message}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={9}
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
        >
          <div style={{ background: "blue", width: "100%", height: "92vh" }}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={12} alignItems="flex-end">
                  <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  rootMain: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperHeader: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bar: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default Home;
