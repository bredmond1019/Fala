import React, { useState, useEffect } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "animate.css";

import { useWordContext } from "../Utilities/WordContextProvider";
import { useWordTileContext } from "../Utilities/WordTileContextProvider";

export default function WordTiles() {
  const { showWordTile, setShowWordTile } = useWordTileContext();
  const { words } = useWordContext();

  const [currentWord, setCurrentWord] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [currentTranslation, setCurrentTranslation] = useState("");
  const [tileNumber, setTileNumber] = useState(0);
  const [seeCurrentTranslation, setSeeCurrentTranslation] = useState(false);

  useEffect(() => {
    setCurrentWord(words[0]?.expression);
    setCurrentImage(words[0]?.url);
    setCurrentTranslation(words[0]?.translation);
  }, [words]);

  useEffect(() => {
    setCurrentWord(words[tileNumber]?.expression);
    setCurrentImage(words[tileNumber]?.url);
    setCurrentTranslation(words[tileNumber]?.translation);
    setSeeCurrentTranslation(false);
  }, [tileNumber]);

  const decreaseTiles = () => {
    let max = words.length;
    setTileNumber(tileNumber - 1 >= 0 ? (tileNumber - 1) % max : max - 1);
    // setCurrentWord(words[tileNumber]?.expression);
  };
  const increaseTiles = () => {
    let max = words.length;
    setTileNumber((tileNumber + 1) % max);
    // setCurrentWord(words[tileNumber]?.expression);
  };

  return (
    <CSSTransition
      in={showWordTile}
      timeout={{ enter: 300, exit: 300 }}
      classNames="word-tile"
      unmountOnExit
    >
      <div className="word-tiles-container">
        <div className="word-tiles-header">
          <h1 className="word-tiles-title">Do you Know the Word?</h1>
          {/* <h3 className="word-tiles-subtitle">Click to Translate</h3> */}
        </div>
        <div className="word-tile-wrapper">
          <div className="btn-tile-left-wrapper">
            <button className="btn-primary btn words-menu-btn" onClick={decreaseTiles}>
              {" "}
              {"<"}{" "}
            </button>
          </div>

          <SwitchTransition mode="out-in">
            <CSSTransition
              key={tileNumber}
              timeout={{ enter: 300, exit: 300 }}
              classNames={{
                enterActive: "animate__bounceIn",
                exitActive: "animate__bounceOut",
              }}
            >
              <div className="word-tile">
                <div className="word-tile-title">
                  <h2 className="word-tile-expression">{currentWord}</h2>
                </div>

                <div className="word-tile-img-wrapper">
                  <img src={currentImage} alt="" className="expression-image" />
                </div>

                <CSSTransition
                  in={seeCurrentTranslation}
                  timeout={300}
                  classNames="word-tile-current-translation"
                  unmountOnExit
                >
                  <h1 className="word-tile-current-translation">{currentTranslation}</h1>
                </CSSTransition>
                {!seeCurrentTranslation && (
                  <button
                    className="btn-primary btn btn-current-translation"
                    onClick={() => setSeeCurrentTranslation(true)}
                  >
                    See Translation
                  </button>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
          <div className="btn-tile-left-wrapper">
            <button className="btn-primary btn words-menu-btn" onClick={increaseTiles}>
              {" "}
              {">"}{" "}
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
