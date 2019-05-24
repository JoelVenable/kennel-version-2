import React, { PureComponent } from "react";
import { Card } from "@material-ui/core";

export default class EmployeeItem extends PureComponent {
  render() {
    return (
      <Card key={this.props.employee.id}>
        <h4>{this.props.employee.name}</h4>
      </Card>
    );
  }
}
