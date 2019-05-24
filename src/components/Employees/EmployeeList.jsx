import React, { PureComponent } from "react";
import EmployeeItem from "./EmployeeItem";

export class EmployeeList extends PureComponent {
  makeEmployeeItems = () => {
    return this.props.employees.map((employee) => {
      return <EmployeeItem employee={employee} />;
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
