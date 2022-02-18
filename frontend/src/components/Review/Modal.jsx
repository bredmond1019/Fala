import React from "react";
import ReactPortal from "../Utilities/ReactPortal";

import { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useWordTileContext } from "../Utilities/WordTileContextProvider";

function Modal({ children, handleClose }) {
  const nodeRef = useRef(null);

  const { isOpen } = useWordTileContext();

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <div className="modal-content">
            {children}
            <button onClick={handleClose} className="close-btn btn-danger insert-btn-review">
              Close
            </button>
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}

export default Modal;
