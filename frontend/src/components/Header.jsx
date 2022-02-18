import React from "react";

import two_people from "./../images/two_people.jpg";

function Header() {
  return (
    <div className="home-wrapper">
      <div className="header-container ">
        <div className="header-title-wrapper">
          <h1 className="header-title">FALA!</h1>
        </div>
      </div>
      <div className="home-title-container">
        <div className="home-title-wrapper">
          <h1 className="home-title">Welcome to Fala!</h1>
          <h3 className="home-subtitle">
            Here you can practice your portugeuse and review vocabulary
          </h3>
        </div>
        <div className="home-image-wrapper">
          <img src={two_people} alt="" className="home-image" />
        </div>
      </div>
    </div>
  );
}

export default Header;
