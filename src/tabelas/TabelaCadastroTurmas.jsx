import { Table, Form } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroTurmas({
  listaTurmas,
  aoMudarTurma,
  setTurmas,
  chamarCadastro,
  filtro,
  aoMudarFiltro,
}) {
  const linhas = [];

  function excluirTurma(codigo) {
    if (window.confirm("Confirma a exclusão do item?")) {
      const listaAtualizada = listaTurmas.filter(
        (turma) => turma.codigo !== codigo
      );
      setTurmas(listaAtualizada);
    }
  }

  function editarTurma(codigo) {
    const turmaEmEdicao = listaTurmas.filter(
      (turma) => turma.codigo === codigo
    );
    aoMudarTurma(...turmaEmEdicao);
    chamarCadastro(codigo);
  }

  listaTurmas.forEach((turma, i) => {
    if (turma.anoLetivo.toLowerCase().indexOf(filtro.toLowerCase()) === -1) {
      return;
    }
    linhas.push(
      <LinhaTurma
        turma={turma}
        key={i}
        editarTurma={editarTurma}
        excluirTurma={excluirTurma}
      />
    );
  });

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Turmas"} />
      <Container className="mt-3">
        <div className="d-flex mb-3 justify-content-between">
          <BotaoNovo acaoBtnNovo={() => chamarCadastro()} />
          <Form>
            <Form.Control
              type="text"
              value={filtro}
              placeholder="Ano letivo..."
              onChange={(e) => aoMudarFiltro(e.target.value)}
              style={{ width: "300px" }}
            />
          </Form>
        </div>
        <Table hover style={{ fontSize: "14px" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Período</th>
              <th>Ano Letivo</th>
              <th>Cursos</th>
              <th>Inicio</th>
              <th>Status</th>
              <th>Vagas</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </Table>
      </Container>
    </div>
  );
}

function LinhaTurma({ turma, editarTurma, excluirTurma }) {
  return (
    <tr>
      <td>{turma.codigo}</td>
      <td>{turma.periodo}</td>
      <td>{turma.anoLetivo}</td>
      <td>{turma.cursos}</td>
      <td>{turma.dtInicio}</td>
      <td>{turma.status}</td>
      <td>{turma.vagas}</td>
      <td>
        <MenuTabela
          aoEditar={() => editarTurma(turma.codigo)}
          aoExcluir={() => excluirTurma(turma.codigo)}
        />
      </td>
    </tr>
  );
}
