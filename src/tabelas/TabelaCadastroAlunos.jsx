import { Table, Form } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroAlunos({
  listaAlunos,
  setAlunos,
  chamarCadastro,
  aoMudarAluno,
  filtro,
  aoMudarFiltro,
}) {
  const linhas = [];

  function excluirAluno(codigo) {
    if (window.confirm("Confirma a exclusão do item?")) {
      const listaAtualizada = listaAlunos.filter(
        (aluno) => aluno.codigo !== codigo
      );
      setAlunos(listaAtualizada);
    }
  }

  function editarAluno(codigo) {
    const alunoEmEdicao = listaAlunos.filter(
      (aluno) => aluno.codigo === codigo
    );
    aoMudarAluno(...alunoEmEdicao);
    chamarCadastro(codigo);
  }

  listaAlunos.forEach((aluno, i) => {
    if (aluno.nome.toLowerCase().indexOf(filtro.toLowerCase()) === -1) {
      return;
    }
    linhas.push(
      <LinhaAluno
        aluno={aluno}
        key={i}
        editarAluno={editarAluno}
        excluirAluno={excluirAluno}
      />
    );
  });

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Alunos"} />
      <Container className="mt-3">
        <div className="d-flex mb-3 justify-content-between">
          <BotaoNovo acaoBtnNovo={() => chamarCadastro()} />
          <Form>
            <Form.Control
              type="text"
              value={filtro}
              placeholder="Pesquisar..."
              onChange={(e) => aoMudarFiltro(e.target.value)}
              style={{ width: "300px" }}
            />
          </Form>
        </div>
        <Table hover style={{ fontSize: "14px" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>RG</th>
              <th>CPF</th>
              <th>Data de Nascimento</th>
              <th>Telefone</th>
              <th>Escola</th>
              <th>Serie</th>
              <th>Periodo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </Table>
      </Container>
    </div>
  );
}

function LinhaAluno({ aluno, editarAluno, excluirAluno }) {
  return (
    <tr>
      <td>{aluno.codigo}</td>
      <td>{aluno.nome}</td>
      <td>{aluno.rg}</td>
      <td>{aluno.cpf}</td>
      <td>{aluno.dtNascimento}</td>
      <td>{aluno.tel}</td>
      <td>{aluno.escola}</td>
      <td>{aluno.serie}</td>
      <td>{aluno.periodo}</td>
      <td>
        <MenuTabela
          aoEditar={() => editarAluno(aluno.codigo)}
          aoExcluir={() => excluirAluno(aluno.codigo)}
        />
      </td>
    </tr>
  );
}
