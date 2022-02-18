import React, { useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Form from "./Form";
import WordTiles from "./WordTiles";
import VocabList from "./VocabList";
import "animate.css";

import { useWordContext } from "../Utilities/WordContextProvider";
import { useWordTileContext } from "../Utilities/WordTileContextProvider";

import Modal from "./Modal";

function Words() {
  const { words, insertWord, deleteWord } = useWordContext();
  const {
    openModal,
    showVocabList,
    setShowVocabList,
    setDisplay,
    showWordTile,
    setShowWordTile,
    isOpen,
    setIsOpen,
    editedWord,
  } = useWordTileContext();

  return (
    <div className="words-container">
      <div className="words-menu">
        <h1 className="words-menu-title">What would you like to do?</h1>
        <div className="words-menu-buttons-wrapper">
          <button className="modal-btn btn-primary btn words-menu-btn" onClick={openModal}>
            Add New Word
          </button>
          <button
            className="btn-primary btn words-menu-btn"
            onClick={() => {
              setShowVocabList(!showVocabList);
              setShowWordTile(false);
              setDisplay(2);
            }}
          >
            Review Vocab Words
          </button>
          <button
            className="btn-primary btn words-menu-btn"
            onClick={() => {
              setShowWordTile(!showWordTile);
              setShowVocabList(false);
              setDisplay(1);
            }}
          >
            {showWordTile ? "Close" : "Show"} Word Tiles
          </button>
        </div>
      </div>

      <WordTiles />
      <VocabList />
      <Modal handleClose={() => setIsOpen(false)}>
        <Form />
      </Modal>
    </div>
  );
}

export default Words;
