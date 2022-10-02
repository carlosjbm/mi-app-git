import React from "react";
import logo from "./logo.svg";
import ComponenteProp from "./components/ComponenteProp";
import Componente from "./components/Componente";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventoES6, EventoES7, MasSobreEventos } from "./components/Evento";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <ComponenteProp msg="Hola soy Un Componente" />
          <hr />
          <Componente
            cadena="Esto es una cadena"
            number={23}
            array={[1, 2, 3]}
            boolean={true}
            object={{ nombre: "Carlos", correo: "carlos.borges@gmail.com" }}
            function={num => num * num}
            reactElement={<i>Elemento React</i>}
            componente={
              <ComponenteProp msg="Soy el componente ComponenteProp" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventoES6 />
          <hr />
          <EventoES7 />
          <hr />
          <MasSobreEventos />
        </section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
