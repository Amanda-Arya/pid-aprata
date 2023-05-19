import Cabecalho2 from "../templates/Cabecalho2";
import { Container, Form, Dropdown, Button } from "react-bootstrap";
import moment from "moment";
import listaRegistros from "../dados/registros";
import Registro from "../templates/Registro";
import { BiArrowBack } from "react-icons/bi";

export default function RelatorioAprendiz(props) {
  const obj = props.dados;
  console.log(props.dados);

  return (
    <>
      <Cabecalho2
        texto1={"Relatório do Aprendiz"}
        texto2={`#${obj.codigo} - ${obj.nome}`}
      />
      <Container className="mt-3">
        <div
          className="d-flex justify-content-between w-100 mb-3"
          style={{ height: "40px" }}
        >
          <Button variant="light" onClick={props.chamarTabela}>
            <BiArrowBack size={20} /> Voltar
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Ações aprendiz
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-2">Contrato</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Informações</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Form>
          <hr />
          <div
            className="d-flex flex-column align-items-center overflow-auto"
            style={{ minHeight: "200px", maxHeight: "200px" }}
          >
            {listaRegistros.length > 0 ? (
              <Registro registros={listaRegistros} />
            ) : (
              <h3>Nenhum registro por aqui...</h3>
            )}
          </div>
          <hr />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="w-75">
              <textarea
                className="w-100 mb-3"
                name=""
                id=""
                cols="30"
                rows="5"
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <div className="w-75">
              <Button type="submit" variant="outline-primary" className="me-2">
                Adicionar registro
              </Button>
              <Button variant="outline-warning">Cancelar</Button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
}
