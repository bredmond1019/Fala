/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Utilities_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Utilities/Navigation */ "./src/components/Utilities/Navigation.jsx");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.jsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _Scss_App_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scss/App.scss */ "./src/Scss/App.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "app",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
        path: "/Fala",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Home__WEBPACK_IMPORTED_MODULE_2__.default, {})
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _images_two_people_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/two_people.jpg */ "./src/images/two_people.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Header() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "home-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "header-container ",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "header-title-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "header-title",
          children: "FALA!"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "home-title-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "home-title-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "home-title",
          children: "Welcome to Fala!"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "home-subtitle",
          children: "Here you can practice your portugeuse and review vocabulary"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "home-image-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: _images_two_people_jpg__WEBPACK_IMPORTED_MODULE_1__,
          alt: "",
          className: "home-image"
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Home.jsx":
/*!*********************************!*\
  !*** ./src/components/Home.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.jsx");
/* harmony import */ var _Review_Review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Review/Review */ "./src/components/Review/Review.jsx");
/* harmony import */ var _WordOfTheDay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WordOfTheDay */ "./src/components/WordOfTheDay.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "app-body",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_WordOfTheDay__WEBPACK_IMPORTED_MODULE_3__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      id: "review",
      className: "review-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Review_Review__WEBPACK_IMPORTED_MODULE_2__.default, {})
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/components/Review/Form.jsx":
/*!****************************************!*\
  !*** ./src/components/Review/Form.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/WordTileContextProvider */ "./src/components/Utilities/WordTileContextProvider.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Form(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      review_word = _useState2[0],
      setWord = _useState2[1];

  var _useWordTileContext = (0,_Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_1__.useWordTileContext)(),
      editedWord = _useWordTileContext.editedWord,
      insertWord = _useWordTileContext.insertWord,
      setIsOpen = _useWordTileContext.setIsOpen;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "form-container",
    children: editedWord ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "mb-3 form-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        htmlFor: "title",
        className: "form-label",
        children: "Enter A Word"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "text",
        className: "form-control",
        placeholder: "Please Enter a Word",
        value: review_word,
        onChange: function onChange(e) {
          return setWord(e.target.value);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        className: "btn btn-primary mt-3 form-button",
        onClick: function onClick() {
          insertWord(review_word);
          setIsOpen(false);
        },
        children: "Insert"
      })]
    }) : null
  });
}

/***/ }),

/***/ "./src/components/Review/Modal.jsx":
/*!*****************************************!*\
  !*** ./src/components/Review/Modal.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Utilities_ReactPortal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/ReactPortal */ "./src/components/Utilities/ReactPortal.jsx");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/WordTileContextProvider */ "./src/components/Utilities/WordTileContextProvider.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function Modal(_ref) {
  var children = _ref.children,
      handleClose = _ref.handleClose;
  var nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useWordTileContext = (0,_Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_2__.useWordTileContext)(),
      isOpen = _useWordTileContext.isOpen;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Utilities_ReactPortal__WEBPACK_IMPORTED_MODULE_1__.default, {
    wrapperId: "react-portal-modal-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.default, {
      "in": isOpen,
      timeout: {
        entry: 0,
        exit: 300
      },
      unmountOnExit: true,
      classNames: "modal",
      nodeRef: nodeRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "modal",
        ref: nodeRef,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "modal-content",
          children: [children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            onClick: handleClose,
            className: "close-btn btn-danger insert-btn-review",
            children: "Close"
          })]
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/components/Review/Review.jsx":
/*!******************************************!*\
  !*** ./src/components/Review/Review.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Review)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Words */ "./src/components/Review/Words.jsx");
/* harmony import */ var _Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/WordTileContextProvider */ "./src/components/Utilities/WordTileContextProvider.jsx");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Review() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "review-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "review-header-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "review-title-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "review-title",
          children: "Vocab Review"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "review-subtitle",
          children: "Here's Where You Can Review Your Vocab Words"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "review-image-wrapper"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Words__WEBPACK_IMPORTED_MODULE_1__.default, {})
    })]
  });
}

/***/ }),

/***/ "./src/components/Review/VocabList.jsx":
/*!*********************************************!*\
  !*** ./src/components/Review/VocabList.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var _Utilities_WordContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/WordContextProvider */ "./src/components/Utilities/WordContextProvider.jsx");
/* harmony import */ var _Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities/WordTileContextProvider */ "./src/components/Utilities/WordTileContextProvider.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function ListOfWords() {
  var _useWordContext = (0,_Utilities_WordContextProvider__WEBPACK_IMPORTED_MODULE_2__.useWordContext)(),
      words = _useWordContext.words,
      deleteWord = _useWordContext.deleteWord;

  var _useWordTileContext = (0,_Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_3__.useWordTileContext)(),
      showVocabList = _useWordTileContext.showVocabList;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.default, {
    "in": showVocabList,
    timeout: {
      enter: 300,
      exit: 300
    },
    classNames: "list-of-vocab-container",
    unmountOnExit: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "list-of-vocab-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        className: "vocab-review-title",
        children: "Words You've Added"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_6__.default, {
        className: "list-of-vocab",
        children: words && words.map(function (word) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.default, {
            timeout: 500,
            classNames: "vocab-word-wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "vocab-word-wrapper",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
                className: "vocab-word",
                children: word.expression
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                className: "btn-danger remove-btn sm",
                onClick: function onClick() {
                  return deleteWord(word);
                },
                children: "\xD7"
              })]
            })
          }, word.id);
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListOfWords); // p-3 border mb-3 shadow-sm rounded border-info d-flex justify-content-between

/***/ }),

/***/ "./src/components/Review/WordTiles.jsx":
/*!*********************************************!*\
  !*** ./src/components/Review/WordTiles.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WordTiles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var _Utilities_WordContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities/WordContextProvider */ "./src/components/Utilities/WordContextProvider.jsx");
/* harmony import */ var _Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utilities/WordTileContextProvider */ "./src/components/Utilities/WordTileContextProvider.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function WordTiles() {
  var _useWordTileContext = (0,_Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_3__.useWordTileContext)(),
      showWordTile = _useWordTileContext.showWordTile,
      setShowWordTile = _useWordTileContext.setShowWordTile;

  var _useWordContext = (0,_Utilities_WordContextProvider__WEBPACK_IMPORTED_MODULE_2__.useWordContext)(),
      words = _useWordContext.words;

  console.log(words);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      currentWord = _useState2[0],
      setCurrentWord = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      currentImage = _useState4[0],
      setCurrentImage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      currentTranslation = _useState6[0],
      setCurrentTranslation = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      tileNumber = _useState8[0],
      setTileNumber = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      seeCurrentTranslation = _useState10[0],
      setSeeCurrentTranslation = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _words$, _words$2, _words$3;

    setCurrentWord((_words$ = words[0]) === null || _words$ === void 0 ? void 0 : _words$.expression);
    setCurrentImage((_words$2 = words[0]) === null || _words$2 === void 0 ? void 0 : _words$2.url);
    setCurrentTranslation((_words$3 = words[0]) === null || _words$3 === void 0 ? void 0 : _words$3.translation);
  }, [words]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _words$tileNumber, _words$tileNumber2, _words$tileNumber3;

    setCurrentWord((_words$tileNumber = words[tileNumber]) === null || _words$tileNumber === void 0 ? void 0 : _words$tileNumber.expression);
    setCurrentImage((_words$tileNumber2 = words[tileNumber]) === null || _words$tileNumber2 === void 0 ? void 0 : _words$tileNumber2.url);
    setCurrentTranslation((_words$tileNumber3 = words[tileNumber]) === null || _words$tileNumber3 === void 0 ? void 0 : _words$tileNumber3.translation);
    setSeeCurrentTranslation(false);
    console.log(tileNumber);
  }, [tileNumber]);

  var decreaseTiles = function decreaseTiles() {
    var max = words.length;
    setTileNumber(tileNumber - 1 >= 0 ? (tileNumber - 1) % max : max - 1); // setCurrentWord(words[tileNumber]?.expression);

    console.log(tileNumber);
  };

  var increaseTiles = function increaseTiles() {
    var max = words.length;
    setTileNumber((tileNumber + 1) % max); // setCurrentWord(words[tileNumber]?.expression);

    console.log(tileNumber);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.default, {
    "in": showWordTile,
    timeout: {
      enter: 300,
      exit: 300
    },
    classNames: "word-tile",
    unmountOnExit: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "word-tiles-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "word-tiles-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "word-tiles-title",
          children: "Do you Know the Word?"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "word-tile-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "btn-tile-left-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            className: "btn-primary btn words-menu-btn",
            onClick: decreaseTiles,
            children: [" ", "<", " "]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_6__.default, {
          mode: "out-in",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.default, {
            timeout: {
              enter: 300,
              exit: 300
            },
            classNames: {
              enterActive: "animate__bounceIn",
              exitActive: "animate__bounceOut"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "word-tile",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "word-tile-title",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
                  className: "word-tile-expression",
                  children: currentWord
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "word-tile-img-wrapper",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: currentImage,
                  alt: "",
                  className: "expression-image"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__.default, {
                "in": seeCurrentTranslation,
                timeout: 300,
                classNames: "word-tile-current-translation",
                unmountOnExit: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
                  className: "word-tile-current-translation",
                  children: currentTranslation
                })
              }), !seeCurrentTranslation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                className: "btn-primary btn btn-current-translation",
                onClick: function onClick() {
                  return setSeeCurrentTranslation(true);
                },
                children: "See Translation"
              })]
            })
          }, tileNumber)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "btn-tile-left-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            className: "btn-primary btn words-menu-btn",
            onClick: increaseTiles,
            children: [" ", ">", " "]
          })
        })]
      })]
    })
  });
}

/***/ }),

/***/ "./src/components/Review/Words.jsx":
/*!*****************************************!*\
  !*** ./src/components/Review/Words.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./src/components/Review/Form.jsx");
/* harmony import */ var _WordTiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WordTiles */ "./src/components/Review/WordTiles.jsx");
/* harmony import */ var _VocabList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VocabList */ "./src/components/Review/VocabList.jsx");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var _Utilities_WordContextProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utilities/WordContextProvider */ "./src/components/Utilities/WordContextProvider.jsx");
/* harmony import */ var _Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utilities/WordTileContextProvider */ "./src/components/Utilities/WordTileContextProvider.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal */ "./src/components/Review/Modal.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












function Words() {
  var _useWordContext = (0,_Utilities_WordContextProvider__WEBPACK_IMPORTED_MODULE_5__.useWordContext)(),
      words = _useWordContext.words,
      insertWord = _useWordContext.insertWord,
      deleteWord = _useWordContext.deleteWord;

  var _useWordTileContext = (0,_Utilities_WordTileContextProvider__WEBPACK_IMPORTED_MODULE_6__.useWordTileContext)(),
      openModal = _useWordTileContext.openModal,
      showVocabList = _useWordTileContext.showVocabList,
      setShowVocabList = _useWordTileContext.setShowVocabList,
      setDisplay = _useWordTileContext.setDisplay,
      showWordTile = _useWordTileContext.showWordTile,
      setShowWordTile = _useWordTileContext.setShowWordTile,
      isOpen = _useWordTileContext.isOpen,
      setIsOpen = _useWordTileContext.setIsOpen,
      editedWord = _useWordTileContext.editedWord;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "words-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "words-menu",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
        className: "words-menu-title",
        children: "What would you like to do?"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "words-menu-buttons-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          className: "modal-btn btn-primary btn words-menu-btn",
          onClick: openModal,
          children: "Add New Word"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          className: "btn-primary btn words-menu-btn",
          onClick: function onClick() {
            setShowVocabList(!showVocabList);
            setShowWordTile(false);
            setDisplay(2);
          },
          children: "Review Vocab Words"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
          className: "btn-primary btn words-menu-btn",
          onClick: function onClick() {
            setShowWordTile(!showWordTile);
            setShowVocabList(false);
            setDisplay(1);
          },
          children: [showWordTile ? "Close" : "Show", " Word Tiles"]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_WordTiles__WEBPACK_IMPORTED_MODULE_2__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_VocabList__WEBPACK_IMPORTED_MODULE_3__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_7__.default, {
      handleClose: function handleClose() {
        return setIsOpen(false);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Form__WEBPACK_IMPORTED_MODULE_1__.default, {})
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Words);

/***/ }),

/***/ "./src/components/Utilities/APIService.jsx":
/*!*************************************************!*\
  !*** ./src/components/Utilities/APIService.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIService": () => (/* binding */ APIService),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var APIService = /*#__PURE__*/function () {
  function APIService() {
    _classCallCheck(this, APIService);
  }

  _createClass(APIService, null, [{
    key: "GetWords",
    value: function GetWords() {
      return fetch("http://127.0.0.1:5000/api/v1/word/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (resp) {
        return resp.json();
      });
    }
  }, {
    key: "InsertWord",
    value: function InsertWord(word) {
      return fetch("http://127.0.0.1:5000/api/v1/word/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(word)
      }).then(function (resp) {
        return resp.json();
      });
    }
  }, {
    key: "DeleteWord",
    value: function DeleteWord(id) {
      return fetch("http://127.0.0.1:5000/api/v1/word/delete/".concat(id), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (resp) {
        return resp.json();
      });
    }
  }, {
    key: "TranslateExpression",
    value: function TranslateExpression(expression) {
      return fetch("http://127.0.0.1:5000/api/v1/translate/".concat(expression), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (resp) {
        return resp.json();
      });
    }
  }, {
    key: "GetImage",
    value: function GetImage(translation) {
      return fetch("http://127.0.0.1:5000/api/v1/image/".concat(translation), {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (resp) {
        return resp.json();
      });
    }
  }]);

  return APIService;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIService);

/***/ }),

/***/ "./src/components/Utilities/Navigation.jsx":
/*!*************************************************!*\
  !*** ./src/components/Utilities/Navigation.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-hash-link */ "./node_modules/react-router-hash-link/dist/react-router-hash-link.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Navigation = function Navigation() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    id: "navbar-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "container",
      id: "navbar",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
        collapseOnSelect: true,
        fixed: "top",
        expand: "sm" // bg="primary"
        // variant="dark"
        ,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Toggle, {
            "aria-controls": "responsive-navbar-nav"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Collapse, {
            id: "responsive-navbar-nav",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default.Brand, {
              as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link,
              to: "/"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
              className: "justify-content-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Link, {
                as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link,
                to: "/",
                children: "Home"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Link, {
                as: react_router_hash_link__WEBPACK_IMPORTED_MODULE_6__.NavHashLink,
                to: "/#review",
                children: "Review"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default.Link, {
                as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link,
                to: "/lessons",
                children: "Lessons"
              })]
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./src/components/Utilities/ReactPortal.jsx":
/*!**************************************************!*\
  !*** ./src/components/Utilities/ReactPortal.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function createWrapperAndAppenToBody(wrapperID) {
  var wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperID);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

function ReactPortal(_ref) {
  var children = _ref.children,
      _ref$wrapperId = _ref.wrapperId,
      wrapperId = _ref$wrapperId === void 0 ? "react-portal-wrapper" : _ref$wrapperId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      wrapperElement = _useState2[0],
      setWrapperElement = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    var element = document.getElementById(wrapperId);
    var systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppenToBody(wrapperId);
    }

    setWrapperElement(element);
    return function () {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);
  if (wrapperElement === null) return null;
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal)(children, document.getElementById(wrapperId));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactPortal);

/***/ }),

/***/ "./src/components/Utilities/WordContextProvider.jsx":
/*!**********************************************************!*\
  !*** ./src/components/Utilities/WordContextProvider.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWordContext": () => (/* binding */ useWordContext),
/* harmony export */   "default": () => (/* binding */ WordContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _APIService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APIService */ "./src/components/Utilities/APIService.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var WordContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var useWordContext = function useWordContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WordContext);
};
function WordContextProvider(_ref) {
  var _getWord, _getWord2, _getWord3, _getWord4;

  var children = _ref.children;

  // Words for the Review Cards Section
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      words = _useState2[0],
      setWords = _useState2[1]; // Gets Words from the Database


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _APIService__WEBPACK_IMPORTED_MODULE_1__.default.GetWords().then(function (resp) {
      return setWords(resp);
    })["catch"](function (errors) {
      return console.log(errors);
    });
  }, []); // Insert Word from frontend to Database, Get's an Image from Spash API, Translates the Word

  var insertWord = function insertWord(expression) {
    _APIService__WEBPACK_IMPORTED_MODULE_1__.default.TranslateExpression(expression).then(function (resp) {
      var expression = resp.expression,
          translation = resp.translation;
      _APIService__WEBPACK_IMPORTED_MODULE_1__.default.GetImage(translation).then(function (resp) {
        var url = resp.thumb;
        var new_word = {
          expression: expression,
          translation: translation,
          url: url
        };
        _APIService__WEBPACK_IMPORTED_MODULE_1__.default.InsertWord(new_word).then(function (resp) {
          var new_words = [].concat(_toConsumableArray(words), [resp]);
          setWords(new_words);
        })["catch"](function (errors) {
          return console.log(errors);
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    })["catch"](function (error) {
      return console.log(error);
    });
  }; // Delete Word from List


  var deleteWord = function deleteWord(word) {
    var new_words = words.filter(function (my_word) {
      if (my_word.id === word.id) {
        return false;
      }

      return true;
    });
    setWords(new_words);
    _APIService__WEBPACK_IMPORTED_MODULE_1__.default.DeleteWord(word.id);
  }; // Used to get word from Local Storage if there is one


  var getWord = function getWord() {
    var storedData = JSON.parse(localStorage.getItem("wordOfDay"));
    return storedData;
  }; //   Set the state, see if word for WORD OF DAY exists using getWord()


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_getWord = getWord()) === null || _getWord === void 0 ? void 0 : _getWord.wordOfDay),
      _useState4 = _slicedToArray(_useState3, 2),
      wordOfDay = _useState4[0],
      setWordOfDay = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_getWord2 = getWord()) === null || _getWord2 === void 0 ? void 0 : _getWord2.definition),
      _useState6 = _slicedToArray(_useState5, 2),
      definition = _useState6[0],
      setDefinition = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_getWord3 = getWord()) === null || _getWord3 === void 0 ? void 0 : _getWord3.wordTranslation),
      _useState8 = _slicedToArray(_useState7, 2),
      wordTranslation = _useState8[0],
      setWordTranslation = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((_getWord4 = getWord()) !== null && _getWord4 !== void 0 && _getWord4.wordExpiration && new Date(getWord().wordExpiration).toDateString() === new Date().toDateString() ? new Date(getWord().wordExpiration).toDateString() : false),
      _useState10 = _slicedToArray(_useState9, 2),
      wordExpiration = _useState10[0],
      setWordExpiration = _useState10[1]; //   Fetch the words from the API and set them in state


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (wordExpiration === false) {
      var expiration = new Date();
      console.log(expiration);
      setWordExpiration(expiration.toDateString());
      fetch("http://127.0.0.1:5000/api/v1/word_of_the_day", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (resp) {
        return resp.json();
      }).then(function (resp) {
        setWordOfDay(resp.word);
        setDefinition(resp.definition);
        _APIService__WEBPACK_IMPORTED_MODULE_1__.default.TranslateExpression(resp.word).then(function (resp) {
          setWordTranslation(resp.translation); // setIsWord(true);
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.clear();
  }, [wordExpiration]); // Store Word of Day in Local Storage

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (wordOfDay) {
      localStorage.setItem("wordOfDay", JSON.stringify({
        wordOfDay: wordOfDay,
        definition: definition,
        wordTranslation: wordTranslation,
        wordExpiration: wordExpiration
      }));
    }
  }, [wordOfDay, wordTranslation]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(WordContext.Provider, {
    value: {
      wordOfDay: wordOfDay,
      setWordOfDay: setWordOfDay,
      definition: definition,
      setDefinition: setDefinition,
      wordTranslation: wordTranslation,
      setWordTranslation: setWordTranslation,
      wordExpiration: wordExpiration,
      setWordExpiration: setWordExpiration,
      insertWord: insertWord,
      deleteWord: deleteWord,
      words: words,
      setWords: setWords
    },
    children: children
  });
}

/***/ }),

/***/ "./src/components/Utilities/WordTileContextProvider.jsx":
/*!**************************************************************!*\
  !*** ./src/components/Utilities/WordTileContextProvider.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWordTileContext": () => (/* binding */ useWordTileContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var WordTileContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var useWordTileContext = function useWordTileContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WordTileContext);
};

function WordTilesContextProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      editedWord = _useState2[0],
      setEditedWord = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showWordTile = _useState6[0],
      setShowWordTile = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showVocabList = _useState8[0],
      setShowVocabList = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      display = _useState10[0],
      setDisplay = _useState10[1];

  var openModal = function openModal() {
    setEditedWord({
      word: ""
    });
    setIsOpen(true);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WordTileContext.Provider, {
    value: {
      editedWord: editedWord,
      setEditedWord: setEditedWord,
      isOpen: isOpen,
      setIsOpen: setIsOpen,
      showWordTile: showWordTile,
      setShowWordTile: setShowWordTile,
      showVocabList: showVocabList,
      setShowVocabList: setShowVocabList,
      display: display,
      setDisplay: setDisplay,
      openModal: openModal
    },
    children: children
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WordTilesContextProvider);

/***/ }),

/***/ "./src/components/WordOfTheDay.jsx":
/*!*****************************************!*\
  !*** ./src/components/WordOfTheDay.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Utilities_WordContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utilities/WordContextProvider */ "./src/components/Utilities/WordContextProvider.jsx");
/* harmony import */ var _images_coffee_shop_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/coffee_shop.jpg */ "./src/images/coffee_shop.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function WordOfTheDay(props) {
  var _useWordContext = (0,_Utilities_WordContextProvider__WEBPACK_IMPORTED_MODULE_1__.useWordContext)(),
      wordOfDay = _useWordContext.wordOfDay,
      wordTranslation = _useWordContext.wordTranslation;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      seeTranslation = _useState2[0],
      setSeeTranslation = _useState2[1];

  var openTranslation = function openTranslation() {
    setSeeTranslation(true);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "word-of-the-day-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "word-of-day-image-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: _images_coffee_shop_jpg__WEBPACK_IMPORTED_MODULE_2__,
        alt: "",
        className: "word-of-day-image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "word-of-day-title-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        className: "word-of-day-title",
        children: "Palavra Do Dia"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        className: "word-of-day",
        children: wordOfDay
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        className: "translation-title",
        children: "Do You Know It?"
      }), seeTranslation ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        className: "word-of-day-translation word-of-day ".concat(seeTranslation ? "grow" : "", " "),
        children: wordTranslation
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "btn-primary btn insert-btn-word-day translation-btn",
        onClick: openTranslation,
        children: "See Translation"
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WordOfTheDay);
{
  /* <h2>{wordTranslation}</h2>
      <h3>{wordExpiration}</h3>
      <div>
        {definition &&
          definition.map((def, i) => {
            return (
              <p key={i} className="meaning">
                {def.meanings[0]}
              </p>
            );
          })}
      </div> */
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_Utilities_WordContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Utilities/WordContextProvider */ "./src/components/Utilities/WordContextProvider.jsx");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





react_dom__WEBPACK_IMPORTED_MODULE_0__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Utilities_WordContextProvider__WEBPACK_IMPORTED_MODULE_1__.default, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__.default, {})
  })
}), document.getElementById("root"));

/***/ }),

/***/ "./src/Scss/App.scss":
/*!***************************!*\
  !*** ./src/Scss/App.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/coffee_shop.jpg":
/*!************************************!*\
  !*** ./src/images/coffee_shop.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7fd94a30aa0fe3179dd.jpg";

/***/ }),

/***/ "./src/images/two_people.jpg":
/*!***********************************!*\
  !*** ./src/images/two_people.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7abcb12ece4ceee26bb9.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_app"] = self["webpackChunkwebpack_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_animate_css_animate_css-node_modules_bootstrap_dist_css_bootstrap_min_cs-0d93b7"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map