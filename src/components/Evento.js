import React, { Component } from "react";

//Eventos en ES6
export class EventoES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return (
      <div>
        <h3>Eventos de clases en ES6</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//Eventos en ES7
export class EventoES7 extends Component {
  state = {
    contador: 0
  };

  //Arow Functions
  sumar = e => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  restar = e => {
    this.setState({
      contador: this.state.contador - 1
    });
  };

  render() {
    return (
      <div>
        <h3>Eventos de clases en ES7</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

function Boton(props) {
  return <button onClick={props.myOnclick}>Eventos mas...</button>;
}

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Algo mas sobre los eventos</h2>
        <Boton
          myOnclick={e =>
            this.handleClick(e, "Hola pasando parametro desde evento")
          }
        />
      </div>
    );
  }
}
