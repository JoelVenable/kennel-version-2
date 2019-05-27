import React, { PureComponent } from "react";
import EmployeeItem from "./EmployeeItem";
import "./Employee.css";

export class EmployeeList extends PureComponent {
  makeEmployeeItems = () => {
    return this.props.employees.map((employee) => {
      return (
        <EmployeeItem employee={employee} userTypes={this.props.userTypes} />
      );
    });
  };

  render() {
    return (
      <article>
        <h1>Employee List</h1>
        {this.makeEmployeeItems()}
      </article>
    );
  }
}
