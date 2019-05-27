import React, { PureComponent } from "react";
import building from "./building.jpg";
import { Card, Button } from "@material-ui/core";

export class LocationItem extends PureComponent {
  render() {
    return (
      <Card className="location-card">
        <div className="location-imageContainer">
          <img src={building} alt="placeholder of building" />
        </div>
        <div className="location-cardInner">
          <h3>{this.props.location.name}</h3>
          <p>{this.props.location.address}</p>
          <div className="location-linkContainer">
            <Button className="location-button">Details</Button>
          </div>
        </div>
      </Card>
    );
  }
}
