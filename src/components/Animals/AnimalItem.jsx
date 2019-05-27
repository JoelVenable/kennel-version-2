import React, { PureComponent } from "react";
import { Card, Button } from "@material-ui/core";
import { Person, Email, MyLocation, Check } from "@material-ui/icons";
import dog from "./DogIcon.svg";

export default class AnimalItem extends PureComponent {
  render() {
    console.log(this.props.animal);

    return (
      <Card key={this.props.animal.id} className="animalItem">
        <div className="card-inner">
          <div className="animalItem-imageContainer">
            <img src={dog} className="animalItem-image" />
          </div>
          <div className="employeeItem-row">
            <div className="employeeItem-iconContainer">
              <Check className="employeeItem-icon" />
            </div>
            <h4 className="animalItem-header">{this.props.animal.name}</h4>
          </div>

          <div className="employeeItem-row">
            <div className="employeeItem-iconContainer">
              <Check className="employeeItem-icon" />
            </div>
            <p className="employeeItem-email">{this.props.animal.breed}</p>
          </div>

          <div className="employeeItem-row">
            <div className="employeeItem-iconContainer">
              <Check className="employeeItem-icon" />
            </div>
            <p className="employeeItem-email">{this.props.animal.gender}</p>
          </div>

          <div className="employeeItem-row">
            <div className="employeeItem-iconContainer">
              <Check className="employeeItem-icon" />
            </div>
            <p className="employeeItem-location">
              {this.props.animal.location.name}
            </p>
          </div>
          <div className="animalItem-buttonContainer">
            <Button className="animalItem-button">Details</Button>
          </div>
        </div>
      </Card>
    );
  }
}
