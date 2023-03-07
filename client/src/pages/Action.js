import React, { useState } from "react";
import "./action.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import defaultImg from "../images/spider_eyes.jpg";
import catImage from "../images/icons/cat.png";
import cowImage from "../images/icons/cow.png";
import whaleImage from "../images/icons/whale.png";
import beeImage from "../images/icons/bee.png";

export default function Action() {
  const [animal, setAnimal] = useState(null);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const backToDefImg = () => {
    setAnimal(null);
    let backToDefImg = animal;
  };

  const handleFilter = () => {
    console.log(animal); //returning null for everything -- revisit this.
  };

  return (
    <div className="actionBG">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Container className="pb-5">
        <Row className="pb-5">
          <Col className="mt-lg-5 mt-md-2">
            <div className="w-100 m-auto mt-5">
              {!image && error && <div class="errorDiv">Error: {error}</div>}
              {!image && loading && (
                <div className="spinner-border text-info" role="status"></div>
              )}
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
              {/* 
                  {image && (
                    <Figure>
                      <Figure.Image
                        className={filterClass}
                        id="randomImg"
                        alt="Random img from Pixabay API"
                        src={image}
                        onClick={fetchImage}
                      />
                      <Figure.Caption className="pixaCaption">
                        <span>Images fetched from Pixabay API. </span>
                        <img
                          className="pixabayLogo"
                          alt="Pixabay logo"
                          src={pixabayLogo}
                        />
                      </Figure.Caption>
                    </Figure>
                  )} */}
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
                  value="bee"
                >
                  <div className="row">
                    <div className="row">
                      <h5 className="mb-0">Cat</h5>
                    </div>
                    <div className="row justify-content-center">
                      <img className="w-25" alt="" src={catImage} />
                    </div>
                  </div>
                </Button>
                <Button
                  className="choiceBtn mb-2"
                  variant="transparent"
                  onClick={handleFilter}
                  checked={animal === "cow"}
                  value="bee"
                >
                  <div className="row">
                    <div className="row">
                      <h5 className="mb-0">Cow</h5>
                    </div>
                    <div className="row justify-content-center">
                      <img className="w-25" alt="" src={cowImage} />
                    </div>
                  </div>
                </Button>
                <Button
                  className="choiceBtn mb-2"
                  variant="transparent"
                  onClick={handleFilter}
                  checked={animal === "whale"}
                  value="bee"
                >
                  <div className="row">
                    <div className="row">
                      <h5 className="mb-0">Whale</h5>
                    </div>
                    <div className="row justify-content-center">
                      <img className="w-25" alt="" src={whaleImage} />
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
                      <img className="w-25" alt="" src={beeImage} />
                    </div>
                  </div>
                </Button>
              </div>
              <Button
                className="resetBtn"
                variant="info"
                size="lg"
                onClick={backToDefImg}
              >
                Come back, Pablita!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
