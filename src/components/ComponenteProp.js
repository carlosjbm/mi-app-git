import React, { Component } from "react";
/*Componente en forma de Clase*/
/* class ComponenteProp extends Component {
  render() {
    return <p>{this.props.msg} </p>;
  }
} */

/*Componente Funcional Expresado*/
// const ComponenteProp = props => <h2>{props.msg}</h2>;

// Componente Funcional Declarado
// function ComponenteProp(props) {
//   return <h2>{props.msg}</h2>;
// }
export default class ComponenteProp extends Component {
  state = {
    estado: "Mi estado"
  };
  render() {
    return (
      <div>
        <h3>Componente de clase ES7</h3>
        <h3>{this.props.msg}</h3>
        <p>Estado:{this.state.estado}</p>
      </div>
    );
  }
}
