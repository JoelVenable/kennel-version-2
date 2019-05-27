import React, { PureComponent } from "react";
import AnimalItem from "./AnimalItem";
import "./animal.css";

export class AnimalList extends PureComponent {
  makeAnimalItems = () => {
    return this.props.animals.map((animal) => {
      return <AnimalItem key={animal.id} animal={animal} />;
    });
  };

  render() {
    return (
      <article>
        <h1>Animal List</h1>
        <div className="animalList-cardContainer">{this.makeAnimalItems()}</div>
      </article>
    );
  }
}
