import React, { PureComponent } from "react";
import { Route } from "react-router-dom";
import { EmployeeList } from "./Employees/EmployeeList";
import { API } from "../modules/API";
import { LocationList } from "./Locations/LocationList";
import { Login } from "./auth/Login";
import { AnimalList } from "./Animals/AnimalList";

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
      <div className="main-content-area">
        <Route
          exact
          path="/"
          render={(props) => {
            return <LocationList locations={this.state.locations} />;
          }}
        />
        <Route
          exact
          path="/employees"
          render={(props) => {
            return (
              <EmployeeList
                employees={this.state.employees}
                userTypes={this.state.userTypes}
              />
            );
          }}
        />
        <Route
          exact
          path="/animals"
          render={(props) => {
            return <AnimalList animals={this.state.animals} />;
          }}
        />
      </div>
    );
  }
}
