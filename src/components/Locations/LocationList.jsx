import React, { PureComponent } from "react";
import { LocationItem } from "./LocationItem";
import "./location.css";

export class LocationList extends PureComponent {
  expandLocations = () => {
    return this.props.locations.map((location) => {
      return <LocationItem key={location.id} location={location} />;
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
