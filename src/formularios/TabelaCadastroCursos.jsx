import { Form, Table } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";

export default function TabelaCadastroCursos(props) {
  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Cursos"} />
      <Container className="mt-3">
        <MenuTabela acaoBtnNovo={props.chamarCadastro} />
        <Table striped bordered hover style={{ fontSize: "12px" }}>
          <thead>
            <tr>
              <th>
                <Form.Check aria-label="option 1" />
              </th>
              <th>#</th>
              <th>Nome</th>
              <th>Sala</th>
              <th>Eixo</th>
              <th>Professor</th>
              <th>Carga Horária</th>
              <th>Data Criação</th>
              <th>Data Desativação</th>
            </tr>
          </thead>
          <tbody>
            {props.cursos.map((curso, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Form.Check aria-label="option 1" />
                  </td>
                  <td>{curso.codigo}</td>
                  <td>{curso.nome}</td>
                  <td>{curso.sala}</td>
                  <td>{curso.eixo}</td>
                  <td>{curso.professor}</td>
                  <td>{curso.cargaHoras}</td>
                  <td>{curso.dtCriacao}</td>
                  <td>{curso.dtDesativacao ? curso.dtDesativacao : "N/A"}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
