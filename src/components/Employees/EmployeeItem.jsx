import React, { PureComponent } from "react";
import { Card, Button } from "@material-ui/core";
import { Person, Email, MyLocation, Work } from "@material-ui/icons";
import personImage from "./83.jpg";

export default class EmployeeItem extends PureComponent {
  findUserType() {
    let userType = this.props.userTypes.find(
      (type) => type.id === this.props.employee.user.userTypeId
    );
    console.log(userType);
    return userType.name;
  }
  render() {
    return (
      <Card key={this.props.employee.id} className="employeeItem">
        <div className="card-inner">
          <div className="employeeItem-imageContainer">
            <img src={personImage} className="employeeItem-image" />
          </div>
          <div className="employeeItem-row">
            <div className="employeeItem-iconContainer">
              <Person className="employeeItem-icon" />
            </div>
            <h4 className="employeeItem-header">
              {this.props.employee.user.name}
            </h4>
          </div>

          <div className="employeeItem-row">
            <div className="employeeItem-iconContainer">
              <Work className="employeeItem-icon" />
            </div>
            <p className="employeeItem-header">{this.findUserType()}</p>
          </div>

          <div className="employeeItem-row">
            <div className="employeeItem-iconContainer">
              <Email className="employeeItem-icon" />
            </div>
            <p className="employeeItem-email">
              {this.props.employee.user.email}
            </p>
          </div>

          <div className="employeeItem-row">
            <div className="employeeItem-iconContainer">
              <MyLocation className="employeeItem-icon" />
            </div>
            <p className="employeeItem-location">
              {this.props.employee.location.name}
            </p>
          </div>
          <div className="employeeItem-actions">
            <Button>Details</Button>
          </div>
        </div>
      </Card>
    );
  }
}
