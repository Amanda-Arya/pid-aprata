import { Table, Form } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroFuncionarios({
  listaFuncionarios,
  aoMudarFuncionario,
  setFuncionarios,
  chamarCadastro,
  filtro,
  aoMudarFiltro,
}) {
  const linhas = [];

  function excluirFuncionario(codigo) {
    if (window.confirm("Confirma a exclusão do item?")) {
      const listaAtualizada = listaFuncionarios.filter(
        (funcionario) => funcionario.codigo !== codigo
      );
      setFuncionarios(listaAtualizada);
    }
  }

  function editarFuncionario(codigo) {
    const funcionarioEmEdicao = listaFuncionarios.filter(
      (func) => func.codigo === codigo
    );
    aoMudarFuncionario(...funcionarioEmEdicao);
    chamarCadastro(codigo);
  }

  listaFuncionarios.forEach((funcionario, i) => {
    if (funcionario.nome.toLowerCase().indexOf(filtro.toLowerCase()) === -1) {
      return;
    }
    linhas.push(
      <LinhaFuncionario
        funcionario={funcionario}
        key={i}
        editarFuncionario={editarFuncionario}
        excluirFuncionario={excluirFuncionario}
      />
    );
  });

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Funcionarios"} />
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
              <th>CPF</th>
              <th>Nome</th>
              <th>Usuário</th>
              <th>Cargo</th>
              <th>Telefone</th>
              <th>Status</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </Table>
      </Container>
    </div>
  );
}

function LinhaFuncionario({
  funcionario,
  editarFuncionario,
  excluirFuncionario,
}) {
  return (
    <tr>
      <td>{funcionario.codigo}</td>
      <td>{funcionario.cpf}</td>
      <td>{funcionario.nome}</td>
      <td>{funcionario.usuario}</td>
      <td>{funcionario.cargo}</td>
      <td>{funcionario.telefone}</td>
      <td>{funcionario.statusAtual}</td>
      <td>{funcionario.email}</td>
      <td>
        <MenuTabela
          aoEditar={() => editarFuncionario(funcionario.codigo)}
          aoExcluir={() => excluirFuncionario(funcionario.codigo)}
        />
      </td>
    </tr>
  );
}
