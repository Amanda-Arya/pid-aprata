import Pagina from "../templates/Pagina";
import "./styles/Tela404.css";
import error from "./img/erro404.jpg";

export default function Tela404(props) {
  return (
    <Pagina>
      <div className="tela-erro">
        <img src={error} alt="Erro 404"/>
        <h1>Página Não Encontrada</h1>
        <h2>A página que você está procurando não pôde ser encontrada</h2>
      </div>
    </Pagina>
  );
}
