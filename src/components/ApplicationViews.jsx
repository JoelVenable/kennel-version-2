import React, { PureComponent } from "react";
import { EmployeeList } from "./Employees/EmployeeList";
import { API } from "../modules/API";
import { LocationList } from "./Locations/LocationList";
import { Login } from "./auth/Login";

export class ApplicationViews extends PureComponent {
  state = {
    employees: [
      {
        id: 1,
        name: "Jessica Younker",
      },
    ],
    locations: [
      {
        name: "Nashville North",
        address: "500 Puppy Way",
      },
    ],
    users: [],
    userTypes: [],
    animalCaretakers: [],
    animals: [],
  };

  render() {
    return (
      <div>
        <Login />
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}
