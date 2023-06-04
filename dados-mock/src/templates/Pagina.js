import Cabecalho1 from "./Cabecalho1";

export default function Pagina(props) {
  return (
    <>
      <Cabecalho1 />
      <div>{props.children}</div>
    </>
  );
}
