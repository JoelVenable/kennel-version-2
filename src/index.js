import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import { Kennel } from "./Kennel";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Kennel />
  </Router>,
  document.getElementById("root")
);
