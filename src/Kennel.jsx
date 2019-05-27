import React, { Component } from "react";
import { Navbar } from "./components/Nav/Navbar";
import { ApplicationViews } from "./components/ApplicationViews";

export class Kennel extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ApplicationViews />
      </>
    );
  }
}
