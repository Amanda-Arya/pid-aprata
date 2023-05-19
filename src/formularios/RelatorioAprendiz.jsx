import Cabecalho2 from "../templates/Cabecalho2";
import { Container, Form, Dropdown } from "react-bootstrap";
import MenuAcao from "../templates/MenuAcao";
import moment from "moment";

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
        <Form>
          <MenuAcao chamarTabela={props.chamarTabela} />
          <Container
            className="bg-light p-3 d-flex justify-content-between"
            style={{ borderRadius: "0.375rem" }}
          >
            <div style={{ whiteSpace: "pre-line" }}>
              {`${obj.nome}, ${moment().diff(obj.dtNascimento, "years")} anos
              Contratante: Apachesys LTDA
              Cargo: Auxiliar de manutenção, desde 02/01/2023
              `}
            </div>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Ações
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Dados pessoais</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Gerenciar contratos
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Novo relatório</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Form>
      </Container>
    </>
  );
}
