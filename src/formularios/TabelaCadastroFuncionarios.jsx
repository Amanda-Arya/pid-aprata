import { Form, Table } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";

export default function TabelaCadastroFuncionarios(props) {
  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Funcionarios"} />
      <Container className="mt-3">
        <MenuTabela chamarCadastro={props.chamarCadastro} />
        <Table striped bordered hover style={{ fontSize: "12px" }}>
          <thead>
            <tr>
              <th>
                <Form.Check aria-label="option 1" />
              </th>
              <th>CPF</th>
              <th>Nome</th>
              <th>Status</th>
              <th>Cargo</th>
              <th>Usuário</th>
              <th>Telefone</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {props.funcionarios.map((funcionario, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Form.Check aria-label="option 1" />
                  </td>
                  <td>{funcionario.cpf}</td>
                  <td>{funcionario.nome}</td>
                  <td>{funcionario.statusAtual}</td>
                  <td>{funcionario.cargo}</td>
                  <td>{funcionario.usuario}</td>
                  <td>{funcionario.telefone}</td>
                  <td>{funcionario.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
