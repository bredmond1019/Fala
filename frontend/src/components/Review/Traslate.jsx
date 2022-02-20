import React, { useState, useEffect } from "react";

// Need the following for async functions
import "regenerator-runtime/runtime";

const apiKey = process.env.REACT_APP_GCP_API_KEY;
const projectId = process.env.REACT_APP_GCP_PROJECT_ID;

let fromLang = "en";
let toLang = "pt";
let text = "something to translate";

let url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
url += "&q=" + encodeURI(text);
url += `&source=${fromLang}`;
url += `&target=${toLang}`;

fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((res) => res.json())
  .then((response) => {
    console.log("response from google: ", response);
  })
  .catch((error) => {
    console.log("There was an error with the translation request: ", error);
  });

// const { Translate } = require("@google-cloud/translate").v2;

// const translate = new Translate({ projectId });

// async function quickStart() {
//   const text = "Hello World";

//   const target = "pt";

//   const [translation] = await translate.translate(text, target);
//   console.log(text, translation);
// }

function Traslate() {
  const [text] = useState("test");
  const [translation, setTranslation] = useState("");
  const [language] = useState("en-US");

  //   quickStart();

  return <div></div>;
}

export default Traslate;
