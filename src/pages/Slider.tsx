import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import js from "../../asset/js.png";
import daydream from "../../asset/daydream.png";
import cat from "../../asset/cat2.jpg";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
export default function Slider() {
  const classes = useStyles();
  return (
    <Carousel showThumbs={false} className={classes.root}>
      <div>
        <img alt="" src={js} />
      </div>
      <div>
        <img alt="" src={js} />
      </div>
      <div>
        <img alt="" src={js} />
      </div>
      <div>
        <img alt="" src={js} />
      </div>
    </Carousel>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "93%",
    height: "10%",
    marginRight: "3%",
  },
}));
