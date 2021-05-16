import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import img from "../../asset/daydream.png";
export default function Blog() {
  const classes = useStyles();
  return (
    // a component to return multiple elements.
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
      {/*  <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        Mr.Phupa is currently working on a UI design la
      </h1> */}
      <div className={classes.cardFeed}>
        <hr />
        <div>Jumbotron</div>
        <Divider />
        <Card className={classes.rootCard}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="DayDream"
              height="140"
              image={img}
              title="DayDream"
            />
            <CardContent>
              <div className={classes.cardContentDetail1}>
                <Typography style={{ fontSize: "1.22em" }}>
                  A day filled with memories
                </Typography>
                <Typography
                  style={{
                    marginLeft: "16%",
                    marginTop: "2%",
                    fontSize: "0.8em",
                    fontWeight: 180,
                    color: "#8B8282",
                  }}
                >
                  14 May 2021
                </Typography>
              </div>
              <div className={classes.cardContentDetail2}>
                <Button
                  variant="outlined"
                  style={{ borderRadius: "15em", marginRight: "2%" }}
                >
                  <Typography style={{ fontSize: "0.6em", fontWeight: 350 }}>
                    camera
                  </Typography>
                </Button>
                <Button variant="outlined" style={{ borderRadius: "15em" }}>
                  <Typography style={{ fontSize: "0.6em", fontWeight: 350 }}>
                    lifestyle
                  </Typography>
                </Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.rootCard}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="DayDream"
              height="140"
              image={img}
              title="DayDream"
            />
            <CardContent>
              <div className={classes.cardContentDetail1}>
                <Typography style={{ fontSize: "1.2em" }}>
                  A day filled with memories
                </Typography>
                <Typography
                  style={{
                    marginLeft: "16%",
                    marginTop: "2%",
                    fontSize: "0.8em",
                    fontWeight: 180,
                    color: "#8B8282",
                  }}
                >
                  14 May 2021
                </Typography>
              </div>
              <div className={classes.cardContentDetail2}>
                <Button
                  variant="outlined"
                  style={{ borderRadius: "15em", marginRight: "2%" }}
                >
                  <Typography style={{ fontSize: "0.6em", fontWeight: 400 }}>
                    camera
                  </Typography>
                </Button>
                <Button variant="outlined" style={{ borderRadius: "15em" }}>
                  <Typography style={{ fontSize: "0.6em", fontWeight: 300 }}>
                    lifestyle
                  </Typography>
                </Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        <h4 style={{ fontWeight: 200 }}>© zuck_pa</h4>
      </div>
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
  cardFeed: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  rootCard: {
    /* maxWidth: 345, */
    marginTop: "3%",
    width: "24em",
    /* height: "16em", */
  },
  cardContentDetail1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cardContentDetail2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: "2%",
    //SS
  },
}));

// meu
{
  /* <div
style={{
  width: "3em",
  height: "3em",
  border: "1px solid black",
  flexWrap: "wrap",
  borderRadius: "0.3em",
}}
></div> */
}
