import { Table } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroTurmas(props) {
  function excluirTurma(codigo) {
    if (window.confirm("Confirma a exclusão do item?")) {
      const listaAtualizada = props.listaTurmas.filter(
        (turma) => turma.codigo !== codigo
      );
      props.setTurmas(listaAtualizada);
    }
  }

  function editarTurma(codigo) {
    const turmaEmEdicao = props.listaTurmas.filter(
      (turma) => turma.codigo == codigo
    );
    props.aoMudarTurma(...turmaEmEdicao);
    props.chamarCadastro(codigo);
  }

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Turmas"} />
      <Container className="mt-3">
        <div className="d-flex mb-3">
          <BotaoNovo acaoBtnNovo={() => props.chamarCadastro()} />
        </div>
        <Table hover style={{ fontSize: "14px" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Período</th>
              <th>Ano Letivo</th>
              <th>Cursos</th>
              <th>Inicio</th>
              <th>Fim</th>
              <th>Status</th>
              <th>Vagas</th>
              <th>Sala</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.listaTurmas.map((turma, i) => {
              return (
                <tr key={i}>
                  <td>{turma.codigo}</td>
                  <td>{turma.periodo}</td>
                  <td>{turma.anoLetivo}</td>
                  <td>{turma.cursos}</td>
                  <td>{turma.dtInicio}</td>
                  <td>{turma.dtFim}</td>
                  <td>{turma.status}</td>
                  <td>{turma.vagas}</td>
                  <td>{turma.sala}</td>
                  <td>
                    <MenuTabela
                      aoEditar={() => editarTurma(turma.codigo)}
                      aoExcluir={() => excluirTurma(turma.codigo)}
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
