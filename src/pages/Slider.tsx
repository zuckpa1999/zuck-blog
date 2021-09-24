import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import js from "../../asset/js.png";
import daydream from "../../asset/daydream.png";
import cat from "../../asset/cat2.jpg";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export default function Slider() {
  const theme = useTheme();
  const classes = useStyles();
  const matches_sm = useMediaQuery(theme.breakpoints.only("sm"));
  return (
    <Carousel
      showThumbs={false}
      className={matches_sm ? classes.root_sm : classes.root_oversm}
    >
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

/* onclick on div to go to the blog,  */

const useStyles = makeStyles((theme) => ({
  root_sm: {
    width: "96%",
    height: "10%",
    marginRight: "0.8%",
  },
  root_oversm: {
    width: "93%",
    height: "10%",
    marginRight: "3%",
  },
}));
