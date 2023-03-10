import React, { useState } from "react";

import ImageSlider from "../components/ImageSlider";

import defaultImg from "../images/spider_eyes.jpg";
import FilterNavigation from "../components/FilterNavigation";

export default function Action({ filterClassFromChild }) {
  const [filterClass, setFilterClass] = useState(null); //Need to send this to ImageSlider component to render appropriate slider

  const handleChangeFilter = async (filterClassFromChild) => {
    try {
      await setFilterClass(filterClassFromChild);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="actionBG">
      <div className="container pb-1">
        <div className="row ">
          <FilterNavigation
            changeFilterCB={handleChangeFilter}
            className="col"
          />

          <div className="col mt-lg-1 mt-md-2">
            <div className="w-100 m-auto mt-3">
              {!filterClass ? (
                <div className="row">
                  <div className="col-md-5 col-12 sm-mt-1 lg-mt-5">
                    <h3>
                      Hi, I'm Pablita! <br />
                      I'm here to help
                    </h3>
                    <p className="mt-4 fs-5">
                      Click on the dropdown menu to choose a non-human friend
                      and see how they see! Reload this page if you want to see
                      my cute face again.
                    </p>
                  </div>
                  <div className="col mb-4 d-flex-justify-content-center">
                    <img
                      className="w-75 rounded float-center "
                      alt="Pablita, the jumping spider"
                      src={defaultImg}
                    />
                  </div>
                </div>
              ) : (
                <ImageSlider filterClass={filterClass} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
