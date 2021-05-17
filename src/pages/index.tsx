import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import daydream from "../../asset/daydream.png";
import cat from "../../asset/cat2.jpg";
import js from "../../asset/js.png";
import Cardblog from "./Cardblog";
import Navbar from "./Navbar";
export default function Blog() {
  const classes = useStyles();
  return (
    // a component to return multiple elements.
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <div className={classes.cardFeed}>
        <img src={js} className={classes.banner} />
        <Cardblog
          date="14 May 20221"
          topic="A day filled with memories"
          tags={["camera", "life style"]}
          image={daydream}
        />
        <Cardblog
          date="3 May 20221"
          topic="Chontong the cat"
          tags={["home", "cat"]}
          image={cat}
        />
        <Cardblog
          date="14 May 20221"
          topic="A day filled with memories"
          tags={["camera", "life style"]}
          image={daydream}
        />
        <Cardblog
          date="3 May 20221"
          topic="Chontong the cat"
          tags={["home", "cat"]}
          image={cat}
        />
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
  },
  cardFeed: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

// card container
// props - date -str, topic-str, tags-arr?, image-str
