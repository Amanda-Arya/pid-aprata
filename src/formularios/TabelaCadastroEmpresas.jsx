import { Form, Table } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";

export default function TabelaCadastroEmpresas(props) {
  return (
    <div>
      <Cabecalho2 texto1={"Consulta"} texto2={"Empresas"} />
      <Container className="mt-3">
        <MenuTabela acaoBtnNovo={props.novoCadastro} />
        <Table striped bordered hover style={{ fontSize: "12px" }}>
          <thead>
            <tr>
              <th>
                <Form.Check aria-label="option 1" />
              </th>
              <th>CNPJ</th>
              <th>IE</th>
              <th>Razão Social</th>
              <th>Município</th>
              <th>UF</th>
              <th>Telefone</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {props.empresas.map((empresa, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Form.Check aria-label="option 1" />
                  </td>
                  <td>{empresa.cnpj}</td>
                  <td>{empresa.ie}</td>
                  <td>{empresa.razaoSocial}</td>
                  <td>{empresa.municipio}</td>
                  <td>{empresa.uf}</td>
                  <td>{empresa.telefone}</td>
                  <td>{empresa.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
