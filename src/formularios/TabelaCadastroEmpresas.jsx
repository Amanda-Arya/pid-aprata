import { Table } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroEmpresas(props) {
  function excluirEmpresa(cnpj) {
    const listaAtualizada = props.listaEmpresas.filter(
      (empresa) => empresa.cnpj !== cnpj
    );
    props.setEmpresas(listaAtualizada);
  }

  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Empresas"} />
      <Container className="mt-3">
        <div className="d-flex mb-3">
          <BotaoNovo acaoBtnNovo={props.chamarCadastro} />
        </div>
        <Table hover style={{ fontSize: "14px" }}>
          <thead>
            <tr>
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
          <tbody>
            {props.listaEmpresas.map((empresa, i) => {
              return (
                <tr key={i}>
                  <td>{empresa.cnpj}</td>
                  <td>{empresa.ie}</td>
                  <td>{empresa.razaoSocial}</td>
                  <td>{empresa.municipio}</td>
                  <td>{empresa.uf}</td>
                  <td>{empresa.telefone}</td>
                  <td>{empresa.email}</td>
                  <td>
                    <MenuTabela
                      acaoBtnExcluir={() => {
                        if (window.confirm("Confirma a exclusão do item?")) {
                          excluirEmpresa(empresa.cnpj);
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