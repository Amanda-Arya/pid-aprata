import { Table, Form } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import MenuTabela from "../templates/MenuTabela";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";

export default function TabelaCadastroCargos({
  listaCargos,
  setCargos,
  chamarCadastro,
  aoMudarCargo,
  filtro,
  aoMudarFiltro,
}) {
  const linhas = [];

  function excluirCargo(codigo) {
    if (window.confirm("Confirma a exclusão do item?")) {
      const listaAtualizada = listaCargos.filter(
        (cargo) => cargo.codigo !== codigo
      );
      setCargos(listaAtualizada);
    }
  }

  function editarCargo(codigo) {
    const cargoEmEdicao = listaCargos.filter(
      (cargo) => cargo.codigo === codigo
    );
    aoMudarCargo(...cargoEmEdicao);
    chamarCadastro(codigo);
  }

  listaCargos.forEach((cargo, i) => {
    if (cargo.nome.toLowerCase().indexOf(filtro.toLowerCase()) === -1) {
      return;
    }
    linhas.push(
      <LinhaCargo
        cargo={cargo}
        key={i}
        editarCargo={editarCargo}
        excluirCargo={excluirCargo}
      />
    );
  });

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Cargos"} />
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
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </Table>
      </Container>
    </div>
  );
}

function LinhaCargo({ cargo, editarCargo, excluirCargo }) {
  return (
    <tr>
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
}
