import React, { useEffect, useState } from "react";

import Words from "./Words";
import WordTileContextProvider from "../Utilities/WordTilesContextProvider";
import "animate.css";

export default function Review() {
  return (
    <div className="review-container">
      <div className="review-header-wrapper">
        <div className="review-title-wrapper">
          <h1 className="review-title">Vocab Review</h1>
          <h2 className="review-subtitle">
            Here's Where You Can Review Your Vocab Words
          </h2>
        </div>
        <div className="review-image-wrapper"></div>
      </div>

      <WordTileContextProvider>
        <Words />
      </WordTileContextProvider>
    </div>
  );
}
