import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import js from "../../asset/js.png";
export default function Slider() {
  return (
    <Carousel>
      <div>
        <img
          alt=""
          src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"
        />
      </div>
      <div>
        <img alt="" src={js} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
}
