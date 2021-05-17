import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.icon}>
          <Typography variant="h4" className={classes.title}>
            zuck_pa;
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            The Untold Stories
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    fontWeight: "normal",

    fontSize: "2em",
    /*     color: "rgba(0, 0, 0, 0.25)", */
  },
  subtitle: {
    fontWeight: 100,
    fontSize: "0.6em",
  },

  navbar: {
    backgroundColor: "transparent",
    color: "transparent",
    boxShadow: "none",
  },
  toolbar: {
    color: "black",
  },
  icon: {
    flexGrow: 1,
    textAlign: "center",
    marginRight: "10%",
  },
}));
