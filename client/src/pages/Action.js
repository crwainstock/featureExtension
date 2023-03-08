import React, { useState } from "react";
import "./action.css";
import ImageSlider from "../components/ImageSlider";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import defaultImg from "../images/spider_eyes.jpg";
import FilterNavigation from "../components/FilterNavigation";

export default function Action() {
  // const [animal, setAnimal] = useState(null);
  // const [image, setImage] = useState(null);
  const [filterClass, setFilterClass] = useState(null); //Need to send this to ImageSlider component to render appropriate slider
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleChangeFilter = () => {
    setFilterClass(filterClass);
    console.log(filterClass); //This isn't running right now...???
  };

  return (
    <div className="actionBG">
      <div className="container pb-1">
        <div className="row pb-5">
          <FilterNavigation
            changeFilterCB={handleChangeFilter}
            className="col"
          />
          <div className="col mt-lg-1 mt-md-2">
            <div className="w-100 m-auto mt-3">
              <div className="row">
                <div className="col-md-5 col-12 sm-mt-1 lg-mt-5">
                  <h3>
                    Hi, I'm Pablita! <br />
                    I'm here to help
                  </h3>
                  <p className="mt-4 fs-5">
                    Click on a non-human friend on the right to see how they
                    see! And if you need me back just click on my button!
                  </p>
                </div>
                <div className="col d-flex-justify-content-center">
                  <img
                    className="w-75 rounded float-center "
                    alt="Pablita, the jumping spider"
                    src={defaultImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageSlider filterClass={filterClass} />
    </div>
  );
}
