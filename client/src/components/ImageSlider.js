import React from "react";
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
  const images = { cat: cat, whale: whale, bee: bee, cow: cow };
  return (
    <div className="container">
      <h3>How does a {filterClass} see?</h3>
      <p>
        The image on the left is how a human sees the world. Use the slider to
        see how a {filterClass} sees it.
      </p>

      {filterClass ? (
        <ReactCompareSlider
          className="d-flex-justify-content-center rounded"
          itemOne={<ReactCompareSliderImage src={human} alt="human" />}
          itemTwo={
            <ReactCompareSliderImage
              src={images[filterClass]}
              alt="non-human"
            />
          }
          style={{ width: "100%", height: "60vh" }}
        />
      ) : null}

      <br />
    </div>
  );
}
