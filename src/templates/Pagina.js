import Cabecalho1 from "./Cabecalho1";
import Cabecalho2 from "./Cabecalho2";
import "./styles/Pagina.css";

export default function Pagina(props) {
  return (
    <>
      <Cabecalho1 />
      {props.obj ? (
        <Cabecalho2 texto1={props.obj.texto1} texto2={props.obj.texto2} />
      ) : null}
      <div id="pageContent">{props.children}</div>
    </>
  );
}
