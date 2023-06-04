import { Table, Form } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroEmpresas({
  listaEmpresas,
  aoMudarEmpresa,
  setEmpresas,
  chamarCadastro,
  filtro,
  aoMudarFiltro,
}) {
  const linhas = [];

  function excluirEmpresa(codigo) {
    if (window.confirm("Confirma a exclusão do item?")) {
      const listaAtualizada = listaEmpresas.filter(
        (empresa) => empresa.codigo !== codigo
      );
      setEmpresas(listaAtualizada);
    }
  }

  function editarEmpresa(codigo) {
    const empresaEmEdicao = listaEmpresas.filter(
      (empresa) => empresa.codigo === codigo
    );
    aoMudarEmpresa(...empresaEmEdicao);
    chamarCadastro(codigo);
  }

  listaEmpresas.forEach((empresa, i) => {
    if (
      empresa.razaoSocial.toLowerCase().indexOf(filtro.toLowerCase()) === -1
    ) {
      return;
    }
    linhas.push(
      <LinhaEmpresa
        empresa={empresa}
        key={i}
        editarEmpresa={editarEmpresa}
        excluirEmpresa={excluirEmpresa}
      />
    );
  });

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Empresas"} />
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
              <th>CNPJ</th>
              <th>IE</th>
              <th>Razão Social</th>
              <th>Município</th>
              <th>UF</th>
              <th>Telefone</th>
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

function LinhaEmpresa({ empresa, editarEmpresa, excluirEmpresa }) {
  return (
    <tr>
      <td>{empresa.codigo}</td>
      <td>{empresa.cnpj}</td>
      <td>{empresa.ie}</td>
      <td>{empresa.razaoSocial}</td>
      <td>{empresa.municipio}</td>
      <td>{empresa.uf}</td>
      <td>{empresa.telefone}</td>
      <td>{empresa.email}</td>
      <td>
        <MenuTabela
          aoEditar={() => editarEmpresa(empresa.codigo)}
          aoExcluir={() => excluirEmpresa(empresa.codigo)}
        />
      </td>
    </tr>
  );
}
