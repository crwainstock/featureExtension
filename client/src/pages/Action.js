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

  return (
    <div className="actionBG">
      <div className="container pb-5">
        <FilterNavigation changeFilterCB={setFilterClass(filterClass)} />
        {/* Not sure if this CB is right here... */}
        <Row className="pb-5">
          <Col className="mt-lg-5 mt-md-2">
            <div className="w-100 m-auto mt-5">
              <div className="row">
                <div className="col-md-5 col-12 d-flex-justify-content-end">
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
                    className="w-100 rounded float-center "
                    alt="Pablita, the jumping spider"
                    src={defaultImg}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <ImageSlider />
    </div>
  );
}
