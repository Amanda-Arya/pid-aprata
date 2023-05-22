import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import "./styles/MenuTabela.css";
import { Link } from "react-router-dom";

export default function MenuTabela(props) {
  return (
    <div className="d-flex justify-content-between">
      {/* <AiOutlineFileText size={20} title="Detalhes" className="icon-btn"/> */}
      <Link to={props.acaoBtnEditar}>
        <AiOutlineEdit size={20} title="Editar" className="icon-btn" />
      </Link>
      <AiOutlineDelete
        size={20}
        title="Excluir"
        className="icon-btn"
        onClick={props.acaoBtnExcluir}
      />
    </div>
  );
}