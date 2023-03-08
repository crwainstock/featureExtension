import React from "react";
import { useState } from "react";
import catImage from "../images/icons/cat.png";
import cowImage from "../images/icons/cow.png";
import whaleImage from "../images/icons/whale.png";
import beeImage from "../images/icons/bee.png";

import Button from "react-bootstrap/Button";

export default function FilterNavigation({ changeFilterCB }) {
  const [animal, setAnimal] = useState(null);
  const [filterClass, setFilterClass] = useState(null); //Need to send up to parent to be used in ImageSlider component
  //   const [image, setImage] = useState(null);

  //   const backToDefImg = () => {
  //     setImage(null);
  //   };

  const handleFilter = (e) => {
    setAnimal(e.target.value);
    changeColor(e.target.value);
    console.log(filterClass); // Seems to be working
    changeFilterCB(filterClass); // To send data to parent
  };

  const changeColor = (animal) => {
    if (animal === "cat") {
      setFilterClass("cat");
    }
    if (animal === "cow") {
      setFilterClass("cow");
    }
    if (animal === "whale") {
      setFilterClass("whale");
    }
    if (animal === "bee") {
      setFilterClass("bee");
    }
  };

  return (
    <div className="col-md-12 col-12">
      <div className="row ">
        <div className="button-area row mt-3 mb-3 justify-content-center border rounded border-3">
          <Button
            className="col mb-2"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "cat"}
            value="cat"
          >
            <h5 className="mb-0">Cat</h5>
            <img className="w-25" alt="cat icon" src={catImage} />
          </Button>
          <Button
            className="col mb-2"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "cow"}
            value="cow"
          >
            <h5 className="mb-0">Cow</h5>
            <img className="w-25" alt="cow icon" src={cowImage} />
          </Button>
          <Button
            className="col mb-2"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "whale"}
            value="whale"
          >
            <h5 className="mb-0">Whale</h5>
            <img className="w-25" alt="whale icon" src={whaleImage} />
          </Button>

          <Button
            className="col mb-2"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "bee"}
            value="bee"
          >
            <h5 className="mb-0">Bee</h5>
            <img className="w-25" alt="bee icon" src={beeImage} />
          </Button>
        </div>
        {/* <div className="row">
          <Button
            className="col resetBtn"
            variant="info"
            size="lg"
            onClick={backToDefImg}
            value="default"
          >
            Come back, Pablita!
          </Button>
        </div> */}
      </div>
    </div>
  );
}
