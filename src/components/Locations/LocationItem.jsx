import React, { PureComponent } from "react";

import { Card } from "@material-ui/core";

export class LocationItem extends PureComponent {
  render() {
    return (
      <Card>
        <h3>{this.props.location.name}</h3>
        <p>{this.props.location.address}</p>
      </Card>
    );
  }
}
