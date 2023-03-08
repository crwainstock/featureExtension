import React, { useState } from "react";
import "./action.css";
import ImageSlider from "../components/ImageSlider";

import defaultImg from "../images/spider_eyes.jpg";
import FilterNavigation from "../components/FilterNavigation";

export default function Action({ filterClassFromChild }) {
  const [filterClass, setFilterClass] = useState(null); //Need to send this to ImageSlider component to render appropriate slider

  const handleChangeFilter = (filterClassFromChild) => {
    console.log(filterClassFromChild); //Returning undefined
    setFilterClass(filterClassFromChild);
    console.log(filterClass); //Returning undefined -- at least it's running now!
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
