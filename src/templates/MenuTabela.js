import { BiArrowBack } from "react-icons/bi";
import { Button } from "react-bootstrap";
import {
  AiOutlineFileAdd,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";

export default function MenuTabela(props) {
  return (
    <>
      <div
        className="d-flex justify-content-between w-100 mb-3"
        style={{ height: "40px" }}
      >
        <Button variant="light">
          <BiArrowBack size={20} /> Voltar
        </Button>
        <div className="d-flex">
          <Button
            variant="light"
            className="mx-2"
            onClick={props.chamarCadastro}
          >
            <AiOutlineFileAdd size={20} /> Novo
          </Button>
          <Button variant="light" className="mx-2" disabled>
            <AiOutlineEdit size={20} /> Editar
          </Button>
          <Button variant="light" disabled>
            <AiOutlineDelete size={20} /> Excluir
          </Button>
        </div>
      </div>
    </>
  );
}
