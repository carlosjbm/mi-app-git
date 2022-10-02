import React, { Component } from "react";

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["primavera", "verano", "otonio", "invierno"]
    };
  }
  render() {
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <ol>
          {this.state.seasons.map(el => (
            <li key={el}>{el}</li>
          ))}
        </ol>
      </div>
    );
  }
}
