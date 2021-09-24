import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import HomeIcon from "@material-ui/icons/Home";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import PublicIcon from "@material-ui/icons/Public";
import ComputerIcon from "@material-ui/icons/Computer";
export default function Navbar() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List style={{ marginTop: "15%" }}>
        {["Home", "Camera", "Life Style", "Technology"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 ? <HomeIcon /> : null}
              {index === 1 ? <PhotoCameraIcon /> : null}
              {index === 2 ? <PublicIcon /> : null}
              {index === 3 ? <ComputerIcon /> : null}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/*   <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={handleDrawerToggle}
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
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp={true} implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdUp={true} implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
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
