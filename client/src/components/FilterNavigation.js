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
    <div className="dropdown-center mt-4">
      <button
        className="dropdown btn btn-danger dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Choose an animal
      </button>

      <ul className="dropdown-menu">
        <div className="row">
          <li className="col w-75 m-auto justify-content-center">
            <Button
              className="row mb-2 border border-0"
              variant="transparent"
              onClick={handleFilter}
              checked={animal === "cat"}
              value="cat"
            >
              <h5 className="col mb-0">Cat</h5>
              <img className="col w-25" alt="cat icon" src={catImage} />
            </Button>
          </li>
          <li className="col w-75 m-auto justify-content-center">
            <Button
              className="row mb-2 border border-0"
              variant="transparent"
              onClick={handleFilter}
              checked={animal === "cow"}
              value="cow"
            >
              <h5 className="col mb-0">Cow</h5>
              <img className="col w-25" alt="cow icon" src={cowImage} />
            </Button>
          </li>

          <li className="col w-75 m-auto justify-content-center">
            <Button
              className="col mb-2 border border-0"
              variant="transparent"
              onClick={handleFilter}
              checked={animal === "whale"}
              value="whale"
            >
              <h5 className="mb-0">Whale</h5>
              <img className="w-25" alt="whale icon" src={whaleImage} />
            </Button>
          </li>
          <li className="col w-75 m-auto justify-content-center">
            <Button
              className="col mb-2 border border-0"
              variant="transparent"
              onClick={handleFilter}
              checked={animal === "bee"}
              value="bee"
            >
              <h5 className="mb-0">Bee</h5>
              <img className="w-25" alt="bee icon" src={beeImage} />
            </Button>
          </li>
        </div>
      </ul>

      {/* Old animal nav bar */}

      {/* <div className="col-sm-3 col-md-12 col-12">
      <div className="row justify-content-center">
        <div className="button-area row mt-3 justify-content-center border rounded border-3">
          <Button
            className="col mb-2 border border-0"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "cat"}
            value="cat"
          >
            <h5 className="mb-0">Cat</h5>
            <img className="w-25" alt="cat icon" src={catImage} />
          </Button>
          <Button
            className="col mb-2 border border-0"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "cow"}
            value="cow"
          >
            <h5 className="mb-0">Cow</h5>
            <img className="w-25" alt="cow icon" src={cowImage} />
          </Button>
          <Button
            className="col mb-2 border border-0"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "whale"}
            value="whale"
          >
            <h5 className="mb-0">Whale</h5>
            <img className="w-25" alt="whale icon" src={whaleImage} />
          </Button>

          <Button
            className="col mb-2 border border-0"
            variant="transparent"
            onClick={handleFilter}
            checked={animal === "bee"}
            value="bee"
          >
            <h5 className="mb-0">Bee</h5>
            <img className="w-25" alt="bee icon" src={beeImage} />
          </Button>
        </div>
      </div>
      </div>
     */}
    </div>
  );
}
