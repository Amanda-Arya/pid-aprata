import { Form, Table } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";

export default function TabelaCadastroCargos(props) {
  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Cargos"} />
      <Container className="mt-3">
        <MenuTabela chamarCadastro={props.chamarCadastro} />
        <Table striped bordered hover style={{ fontSize: "12px" }}>
          <thead>
            <tr>
              <th>
                <Form.Check aria-label="option 1" />
              </th>
              <th>#</th>
              <th>Nome</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {props.cargos.map((cargo, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Form.Check aria-label="option 1" />
                  </td>
                  <td>{cargo.codigo}</td>
                  <td>{cargo.nome}</td>
                  <td>{cargo.descricao}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
