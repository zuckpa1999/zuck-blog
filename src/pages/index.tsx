import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import daydream from "../../asset/daydream.png";
import cat from "../../asset/cat2.jpg";
import js from "../../asset/js.png";
import Cardblog from "./Cardblog";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import { useLayoutEffect, useState } from "react";
export default function Blog() {
  const classes = useStyles();
  const [width] = useMediaQuery();
  function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0]);

    useLayoutEffect(() => {
      function updateScreenSize() {
        setScreenSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
      return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return screenSize;
  }

  return (
    // a component to return multiple elements.
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <div className={classes.cardFeed}>
        <img src={js} className={classes.banner} />
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{
            marginLeft: "9%",
            marginRight: width > 600 ? "2%" : "none",
            padding: width > 600 ? "0.45em" : "none",
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
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  banner: {
    width: "90%",
    height: "11em",
    /*   display: "flex",
    flexDirection: "row",
    alignContent: "center", */
  },
  cardFeed: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

// card container
// props - date -str, topic-str, tags-arr?, image-str
