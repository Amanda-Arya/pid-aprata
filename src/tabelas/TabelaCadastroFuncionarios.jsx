import { Table } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroFuncionarios(props) {
  function excluirFuncionario(cpf) {
    const listaAtualizada = props.listaFuncionarios.filter(
      (funcionario) => funcionario.cpf !== cpf
    );
    props.setFuncionarios(listaAtualizada);
  }

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Funcionarios"} />
      <Container className="mt-3">
        <div className="d-flex mb-3">
          <BotaoNovo acaoBtnNovo={props.chamarCadastro} />
        </div>
        <Table hover style={{ fontSize: "14px" }}>
          <thead>
            <tr>
              <th>CPF</th>
              <th>Nome</th>
              <th>Usuário</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.listaFuncionarios.map((funcionario, i) => {
              return (
                <tr key={i}>
                  <td>{funcionario.cpf}</td>
                  <td>{funcionario.nome}</td>
                  <td>{funcionario.usuario}</td>
                  <td>{funcionario.telefone}</td>
                  <td>{funcionario.email}</td>
                  <td>
                    <MenuTabela
                      acaoBtnExcluir={() => {
                        if (window.confirm("Confirma a exclusão do item?")) {
                          excluirFuncionario(funcionario.cpf);
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