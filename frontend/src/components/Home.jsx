import React from "react";

import Header from "./Header";
import Review from "./Review/Review";
import WordOfTheDay from "./WordOfTheDay";

function Home() {
  return (
    <div className="app-body">
      <Header />

      <WordOfTheDay />
      <div id="review" className="review-wrapper">
        <Review />
      </div>
    </div>
  );
}

export default Home;
