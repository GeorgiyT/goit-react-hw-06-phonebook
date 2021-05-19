import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "modern-normalize/modern-normalize.css";
import "./index.css";
import store from "./components/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);