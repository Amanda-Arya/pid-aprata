import { Table } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroAlunos(props) {
  function excluirAluno(codigo) {
    if (window.confirm("Confirma a exclusão do item?")) {
      const listaAtualizada = props.listaAlunos.filter(
        (aluno) => aluno.codigo !== codigo
      );
      props.setAlunos(listaAtualizada);
    }
  }

  function editarAluno(codigo) {
    const alunoEmEdicao = props.listaAlunos.filter(
      (aluno) => aluno.codigo === codigo
    );
    props.aoMudarAluno(...alunoEmEdicao);
    props.chamarCadastro(codigo);
  }

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Alunos"} />
      <Container className="mt-3">
        <div className="d-flex mb-3">
          <BotaoNovo acaoBtnNovo={() => props.chamarCadastro()} />
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
          <tbody>
            {props.listaAlunos.map((aluno, i) => {
              return (
                <tr key={i}>
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
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
