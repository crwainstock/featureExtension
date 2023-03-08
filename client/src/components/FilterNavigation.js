import React from "react";
import { useState } from "react";
import catImage from "../images/icons/cat.png";
import cowImage from "../images/icons/cow.png";
import whaleImage from "../images/icons/whale.png";
import beeImage from "../images/icons/bee.png";

import Button from "react-bootstrap/Button";

export default function FilterNavigation() {
  const [animal, setAnimal] = useState(null);
  const [filterClass, setFilterClass] = useState(null);
  const [image, setImage] = useState(null);

  const backToDefImg = () => {
    setImage(null);
  };

  const handleFilter = (e) => {
    setAnimal(e.target.value);
    console.log(e.target);
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
    <div className="col-md-12 col-12">
      <div className="row ">
        <div className="row mb-3 justify-content-center offset-md-col-3">
          <Button
            className="col choiceBtn mb-2"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "cat"}
            value="cat"
          >
            <h5 className="mb-0">Cat</h5>
            <img className="w-25" alt="cat icon" src={catImage} />
          </Button>
          <Button
            className="col choiceBtn mb-2"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "cow"}
            value="cow"
          >
            <h5 className="mb-0">Cow</h5>
            <img className="w-25" alt="cow icon" src={cowImage} />
          </Button>
          <Button
            className="col choiceBtn mb-2"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "whale"}
            value="whale"
          >
            <h5 className="mb-0">Whale</h5>
            <img className="w-25" alt="whale icon" src={whaleImage} />
          </Button>

          <Button
            className="col choiceBtn mb-2"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "bee"}
            value="bee"
          >
            <h5 className="mb-0">Bee</h5>
            <img className="w-25" alt="bee icon" src={beeImage} />
          </Button>
        </div>
        <div className="row">
          <Button
            className="col resetBtn"
            variant="info"
            size="lg"
            onClick={backToDefImg}
            value="default"
          >
            Come back, Pablita!
          </Button>
        </div>
      </div>
    </div>
  );
}
