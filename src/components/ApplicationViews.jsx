import React, { PureComponent } from "react";
import { EmployeeList } from "./Employees/EmployeeList";
import { API } from "../modules/API";
import { LocationList } from "./Locations/LocationList";
import { Login } from "./auth/Login";

export class ApplicationViews extends PureComponent {
  state = {
    employees: [],
    locations: [],
    users: [],
    userTypes: [],
    animalCaretakers: [],
    animals: [],
  };

  updateStateFor = async (endpoint) => {
    this.setState({ [endpoint]: await API[endpoint].getAll() });
  };

  async componentDidMount() {
    this.setState({
      employees: await API.employees.getAll(),
      locations: await API.locations.getAll(),
      users: await API.users.getAll(),
      userTypes: await API.userTypes.getAll(),
      animalCaretakers: await API.animalCaretakers.getAll(),
      animals: await API.animals.getAll(),
    });
  }
  render() {
    return (
      <div>
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}
