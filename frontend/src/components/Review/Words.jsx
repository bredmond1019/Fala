import React, { useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Form from "./Form";
import WordTiles from "./WordTiles";
import ListOfWords from "./ListOfWords";
import "animate.css";

import { useWordContext } from "../Utilities/WordContextProvider";
import { useWordTileContext } from "../Utilities/WordTilesContextProvider";

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
    <div className="word-tiles-wrapper">
      <div className="word-tiles-menu">
        <h1 className="word-tiles-menu-title">What would you like to do?</h1>
        <button
          className="modal-btn btn-primary btn insert-btn-review"
          onClick={openModal}
        >
          Add New Word
        </button>
        <button
          className="btn-primary btn insert-btn-review"
          onClick={() => {
            setShowVocabList(!showVocabList);
            setShowWordTile(false);
            setDisplay(2);
          }}
        >
          Review List of Words
        </button>
        <button
          className="btn-primary btn insert-btn-review"
          onClick={() => {
            setShowWordTile(!showWordTile);
            setShowVocabList(false);
            setDisplay(1);
          }}
        >
          {showWordTile ? "Close" : "Show"} Word Tiles
        </button>
      </div>

      <WordTiles />
      <ListOfWords />
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Form word={editedWord} insertWord={insertWord} setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
}

export default WordTiles;
