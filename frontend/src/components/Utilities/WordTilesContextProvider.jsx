import React, { useState } from "react";
import { createContext, useContext } from "react";

const WordTileContext = createContext();
export const useWordTileContext = () => useContext(WordTileContext);

function WordTilesContextProvider({ children }) {
  const [editedWord, setEditedWord] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showWordTile, setShowWordTile] = useState(false);
  const [showVocabList, setShowVocabList] = useState(false);
  const [display, setDisplay] = useState(0);

  const openModal = () => {
    setEditedWord({ word: "" });
    setIsOpen(true);
  };

  return (
    <WordTileContext.Provider
      value={{
        editedWord,
        setEditedWord,
        isOpen,
        setIsOpen,
        showWordTile,
        setShowWordTile,
        showVocabList,
        setShowVocabList,
        display,
        setDisplay,
        openModal,
      }}
    >
      {children}
    </WordTileContext.Provider>
  );
}

export default WordTilesContextProvider;
