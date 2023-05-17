import { BiArrowBack } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { Button } from "react-bootstrap";
import { AiOutlineSave } from "react-icons/ai";

export default function MenuAcao(props) {
  return (
    <>
      <div className="d-flex justify-content-between w-100 mb-3"
      style={{ height: "40px" }}>
        <Button variant="light" onClick={props.chamarTabela}>
          <BiArrowBack size={20} /> Voltar
        </Button>
        <div className="d-flex">
          <Button variant="light" type="reset" className="mx-2">
            <GrClose size={20} /> Cancelar
          </Button>
          <Button variant="light" type="submit">
            <AiOutlineSave size={20} /> Salvar
          </Button>
        </div>
      </div>
    </>
  );
}
