import { Form, Table } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroCursos(props) {
  return (
    <>
      <MenuTabela chamarCadastro={props.chamarCadastro} />
      <Table
        striped
        bordered
        hover
        style={{ fontSize: "12px" }}
      >
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
    </>
  );
}
