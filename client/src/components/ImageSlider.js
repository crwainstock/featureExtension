import React from "react";
import "../components/imageSlider.css";

export default function ImageSlider() {
  return (
    <div className="container">
      <h3>Image slider goes here</h3>
      <div className="img-comp-container">
        <div className="img-comp-img">
          <img src="./images/animalVision/human.png" width="300" height="200" />
        </div>
        <div className="img-comp-img img-comp-overlay">
          <img src="./images/animalVision/bee.png" width="300" height="200" />
        </div>
      </div>
    </div>
  );
}
