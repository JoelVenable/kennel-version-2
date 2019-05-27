import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";
import "./navbar.css";

export class Navbar extends PureComponent {
  state = {
    links: [
      {
        name: "Locations",
        href: "/",
      },
      {
        name: "Animals",
        href: "/animals",
      },
      {
        name: "Employees",
        href: "/employees",
      },
    ],
  };

  makeLinks() {
    return this.state.links.map((link) => {
      return (
        <li key={link.name} className="navbar-item">
          <Link className="navbar-link" to={link.href}>
            {link.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <AppBar color="primary" position="static">
        <div className="navbar-outerContainer">
          <Typography variant="h2" className="navbar-title">
            Kennel
          </Typography>
          <div className="navbar-linkContainer">
            <ul className="navbar-ul">{this.makeLinks()}</ul>
          </div>
        </div>
      </AppBar>
    );
  }
}
