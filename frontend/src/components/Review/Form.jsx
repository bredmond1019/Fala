import React, { useState } from "react";
import { useWordTileContext } from "../Utilities/WordTileContextProvider";

export default function Form(props) {
  const [review_word, setWord] = useState("");
  const { editedWord, insertWord, setIsOpen } = useWordTileContext();

  return (
    <div className="form-container">
      {editedWord ? (
        <div className="mb-3 form-wrapper">
          <label htmlFor="title" className="form-label">
            Enter A Word
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Please Enter a Word"
            value={review_word}
            onChange={(e) => setWord(e.target.value)}
          />

          <button
            className="btn btn-primary mt-3 form-button"
            onClick={() => {
              insertWord(review_word);
              setIsOpen(false);
            }}
          >
            Insert
          </button>
        </div>
      ) : null}
    </div>
  );
}
