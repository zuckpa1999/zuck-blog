import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import daydream from "../../asset/daydream.png";
import cat from "../../asset/cat2.jpg";
import js from "../../asset/js.png";
import Cardblog from "./Cardblog";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Grid from "@material-ui/core/Grid";
import { useLayoutEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Blog() {
  const classes = useStyles();
  const theme = useTheme();
  const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));
  const matches_ipad = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    // a component to return multiple elements.
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <Navbar />
        <div className={classes.cardFeed}>
          <img
            src={js}
            className={matches_ipad ? classes.banner_ipad : classes.banner}
          />
          <Slider />
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{
              marginLeft: matches_sm ? "4%" : "13%",
              marginRight: matches_sm ? "none" : "10",
              padding: matches_sm ? "none" : "0,45em",
            }}
          >
            <Grid item xs={12} sm={6}>
              <Cardblog
                date="14 May 20221"
                // If the texts are long, it will enter the new line and break the layout
                topic="Chontong the cat"
                tags={["camera", "life style"]}
                image={cat}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Cardblog
                date="3 May 20221"
                topic="Chontong the cat"
                tags={["home", "cat"]}
                image={cat}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Cardblog
                date="14 May 20221"
                topic="Chontong the cat"
                tags={["camera", "life style"]}
                image={daydream}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Cardblog
                date="3 May 20221"
                topic="Chontong the cat"
                tags={["home", "cat"]}
                image={cat}
              />
            </Grid>
          </Grid>
          <h4 style={{ fontWeight: 200 }}>© zuck_pa</h4>
        </div>
      </React.Fragment>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "1.3%",
  },
  banner: {
    width: "92.5%",
    height: "12em",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "2.8%",
  },
  banner_ipad: {
    width: "96.5%",
    height: "12em",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFeed: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
