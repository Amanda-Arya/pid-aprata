import { Table } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import MenuTabela from "../templates/MenuTabela";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";

export default function TabelaCadastroCargos(props) {
  function excluirCargo(codigo) {
    if (window.confirm("Confirma a exclusão do item?")) {
      const listaAtualizada = props.listaCargos.filter(
        (cargo) => cargo.codigo !== codigo
      );
      props.setCargos(listaAtualizada);
    }
  }

  function editarCargo(codigo) {
    const cargoEmEdicao = props.listaCargos.filter(
      (cargo) => cargo.codigo == codigo
    );
    props.aoMudarCargo(...cargoEmEdicao);
    props.chamarCadastro(codigo);
  }

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Cargos"} />
      <Container className="mt-3">
        <div className="d-flex mb-3">
          <BotaoNovo acaoBtnNovo={() => props.chamarCadastro()} />
        </div>
        <Table hover style={{ fontSize: "14px" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.listaCargos.map((cargo, i) => {
              return (
                <tr key={i}>
                  <td>{cargo.codigo}</td>
                  <td>{cargo.nome}</td>
                  <td>{cargo.descricao}</td>
                  <td>
                    <MenuTabela
                      aoEditar={() => editarCargo(cargo.codigo)}
                      aoExcluir={() => excluirCargo(cargo.codigo)}
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
