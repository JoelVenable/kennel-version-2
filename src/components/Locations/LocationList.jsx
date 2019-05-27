import React, { PureComponent } from "react";
import { Card } from "@material-ui/core";
import { LocationItem } from "./LocationItem";
import "./location.css";

export class LocationList extends PureComponent {
  expandLocations = () => {
    return this.props.locations.map((location) => {
      return <LocationItem location={location} />;
    });
  };
  render() {
    return (
      <>
        <h2>Kennel Locations</h2>
        <div className="location-cardContainer">{this.expandLocations()}</div>
      </>
    );
  }
}
