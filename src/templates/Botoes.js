import { BiArrowBack } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { Button } from "react-bootstrap";
import {
  AiOutlineSave,
  AiOutlineFileAdd,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineFileText,
} from "react-icons/ai";

function BotaoVoltar(props) {
  return (
    <Button className="mx-1" variant="outline-secondary" onClick={props.acaoBtnVoltar}>
      <BiArrowBack size={20} /> Voltar
    </Button>
  );
}

function BotaoDetalhes(props) {
  return (
    <Button className="mx-1" variant="outline-secondary">
      <AiOutlineFileText size={20} /> Detalhes
    </Button>
  );
}

function BotaoCancelar(props) {
  return (
    <Button className="mx-1" variant="outline-secondary">
      <GrClose size={20} /> Cancelar
    </Button>
  );
}

function BotaoSalvar(props) {
  return (
    <Button className="mx-1" variant="outline-secondary">
      <AiOutlineSave size={20} /> Salvar
    </Button>
  );
}

function BotaoExcluir(props) {
  return (
    <Button className="mx-1" variant="outline-secondary">
      <AiOutlineDelete size={20} /> Excluir
    </Button>
  );
}

function BotaoEditar(props) {
  return (
    <Button className="mx-1" variant="outline-secondary">
      <AiOutlineEdit size={20} /> Editar
    </Button>
  );
}

function BotaoNovo(props) {
  return (
    <Button className="mx-1" variant="outline-secondary" onClick={props.acaoBtnNovo}>
      <AiOutlineFileAdd size={20} /> Novo
    </Button>
  );
}

export {
  BotaoVoltar,
  BotaoCancelar,
  BotaoSalvar,
  BotaoExcluir,
  BotaoEditar,
  BotaoNovo,
  BotaoDetalhes,
};
