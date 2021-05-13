import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
export default function Blog() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
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
          <Typography variant="h5" className={classes.title}>
            zuck_pa
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Mr.Phupa is currently working on an UI design la
      </h1>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "transparent",
  },
  toolbar: {
    color: "black",
  },
}));
