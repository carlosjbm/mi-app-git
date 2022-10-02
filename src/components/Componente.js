export default function Componente(props) {
  return (
    <div>
      <i>{props.porDefeco}</i>
      <h2>{props.cadena}</h2>
      <h2>{props.number}</h2>
      <h2>{props.array.join(" , ")}</h2>
      <h2>{props.boolean ? "true" : "false"}</h2>
      <p>{props.object.nombre + "-" + props.object.correo}</p>
      <p>{props.function(props.array[2])}</p>
      <h3>{props.reactElement}</h3>
      <h2>{props.componente}</h2>
    </div>
  );
}
Componente.defaultProps = {
  porDefeco: "Porp Por Defecto"
};
