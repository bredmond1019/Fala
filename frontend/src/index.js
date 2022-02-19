import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import WordContextProvider from "./components/Utilities/WordContextProvider";
import App from "./App";

// require("dotenv").config();

// import { setConfig } from "react-google-translate";

// setConfig({
//   clientEmail: process.env.REACT_APP_GCP_CLIENT_EMAIL ?? "",
//   privateKey: process.env.REACT_APP_GCP_PRIVATE_KEY ?? "",
//   projectId: process.env.REACT_APP_GCP_PROJECT_ID ?? "",
// });

ReactDOM.render(
  <WordContextProvider>
    <Router>
      <App />
    </Router>
  </WordContextProvider>,
  document.getElementById("root")
);
