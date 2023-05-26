import { Table } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroCursos(props) {
  function excluirCurso(codigo) {
    const listaAtualizada = props.listaCursos.filter(
      (curso) => curso.codigo !== codigo
    );
    props.setCursos(listaAtualizada);
  }

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Cursos"} />
      <Container className="mt-3">
        <div className="d-flex mb-3">
          <BotaoNovo acaoBtnNovo={props.chamarCadastro} />
        </div>
        <Table hover style={{ fontSize: "14px" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Sala</th>
              <th>Eixo</th>
              <th>Professor</th>
              <th>Carga Horária</th>
              <th>Criado em</th>
              <th>Desativado em</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.listaCursos.map((curso, i) => {
              return (
                <tr key={i}>
                  <td>{curso.codigo}</td>
                  <td>{curso.nome}</td>
                  <td>{curso.sala}</td>
                  <td>{curso.eixo}</td>
                  <td>{curso.professor}</td>
                  <td>{curso.cargaHoras}</td>
                  <td>{curso.dtCriacao}</td>
                  <td>{curso.dtDesativacao ? curso.dtDesativacao : "N/A"}</td>
                  <td>
                    <MenuTabela
                      acaoBtnEditar={() => { onclick=props.editarCurso(curso) }}
                      acaoBtnExcluir={() => {
                        if (window.confirm("Confirma a exclusão do item?")) {
                          excluirCurso(curso.codigo);
                        }
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}