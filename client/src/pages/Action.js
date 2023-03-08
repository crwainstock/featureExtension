import React, { useState } from "react";
import "./action.css";
import ImageSlider from "../components/ImageSlider";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import defaultImg from "../images/spider_eyes.jpg";
import catImage from "../images/icons/cat.png";
import cowImage from "../images/icons/cow.png";
import whaleImage from "../images/icons/whale.png";
import beeImage from "../images/icons/bee.png";

export default function Action() {
  const [animal, setAnimal] = useState(null);
  const [image, setImage] = useState(null);
  const [filterClass, setFilterClass] = useState(null); //Need to send this to ImageSlider component to render appropriate slider
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const backToDefImg = () => {
    setImage(null);
  };

  const handleFilter = (e) => {
    setAnimal(e.target.value);
    changeColor(e.target.value);
    console.log(filterClass); // undefined...not sure why
  };

  const changeColor = (animal) => {
    if (animal === "cat") {
      setFilterClass("catFilter");
    }
    if (animal === "cow") {
      setFilterClass("cowFilter");
    }
    if (animal === "whale") {
      setFilterClass("whaleFilter");
    }
    if (animal === "bee") {
      setFilterClass("beeFilter");
    }
  };

  return (
    <div className="actionBG">
      <Container className="pb-5">
        <Row className="pb-5">
          <Col className="mt-lg-5 mt-md-2">
            <div className="w-100 m-auto mt-5">
              {/* {!image && error && <div class="errorDiv">Error: {error}</div>}
              {!image && loading && (
                <div className="spinner-border text-info" role="status"></div>
              )} */}
              {!image && !error && !loading && (
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
              )}
              {/* Code here to render specific animal images upon click of icons */}
            </div>

            <br />
          </Col>
          <Col className="mt-lg-5 col-lg-4 mt-md-3 col-md-12 col-12">
            <div className="col ">
              <div className="col mb-3 justify-content-center">
                <Button
                  className="choiceBtn mb-2"
                  variant="transparent"
                  onClick={handleFilter}
                  checked={animal === "cat"}
                  value="cat"
                >
                  <div className="row">
                    <div className="row">
                      <h5 className="mb-0">Cat</h5>
                    </div>
                    <div className="row justify-content-center">
                      <img
                        className="w-25"
                        alt="cat icon"
                        value="cat"
                        src={catImage}
                      />
                    </div>
                  </div>
                </Button>
                <Button
                  className="choiceBtn mb-2"
                  variant="transparent"
                  onClick={handleFilter}
                  checked={animal === "cow"}
                  value="cow"
                >
                  <div className="row">
                    <div className="row">
                      <h5 className="mb-0">Cow</h5>
                    </div>
                    <div className="row justify-content-center">
                      <img
                        className="w-25"
                        alt="cow icon"
                        value="cow"
                        src={cowImage}
                      />
                    </div>
                  </div>
                </Button>
                <Button
                  className="choiceBtn mb-2"
                  variant="transparent"
                  onClick={handleFilter}
                  checked={animal === "whale"}
                  value="whale"
                >
                  <div className="row">
                    <div className="row">
                      <h5 className="mb-0">Whale</h5>
                    </div>
                    <div className="row justify-content-center">
                      <img
                        className="w-25"
                        alt="whale icon"
                        value="whale"
                        src={whaleImage}
                      />
                    </div>
                  </div>
                </Button>

                <Button
                  className="choiceBtn mb-2"
                  variant="transparent"
                  onClick={handleFilter}
                  checked={animal === "bee"}
                  value="bee"
                >
                  <div className="row">
                    <div className="row">
                      <h5 className="mb-0">Bee</h5>
                    </div>
                    <div className="row justify-content-center">
                      <img
                        className="w-25"
                        alt="bee icon"
                        value="bee"
                        src={beeImage}
                      />
                    </div>
                  </div>
                </Button>
              </div>
              <Button
                className="resetBtn"
                variant="info"
                size="lg"
                onClick={backToDefImg}
                value="default"
              >
                Come back, Pablita!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <ImageSlider />
    </div>
  );
}
