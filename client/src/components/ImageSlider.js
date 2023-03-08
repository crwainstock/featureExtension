import React from "react";
import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import bee from "../images/animalVision/bee.png";
import cat from "../images/animalVision/cat.png";
import cow from "../images/animalVision/cow.png";
import human from "../images/animalVision/human.png";
import whale from "../images/animalVision/whale.png";

export default function ImageSlider({ filterClass }) {
  // let itemTwoSrc = `../images/animalVision/${filterClass}.png`;
  return (
    <div className="container mb-4">
      {/* <h3>Image slider goes here</h3> */}
      {filterClass ? (
        <ReactCompareSlider
          className="d-flex-justify-content-center rounded"
          itemOne={<ReactCompareSliderImage src={human} alt="human" />}
          itemTwo={<ReactCompareSliderImage src={filterClass} alt="bee" />}
          style={{ width: "100%", height: "75vh" }}
        />
      ) : null}

      <br />
    </div>
  );
}
