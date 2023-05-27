import { Container, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import MenuFormulario from "../templates/MenuFormulario";
import Cabecalho2 from "../templates/Cabecalho2";
import InputMask from 'react-input-mask';

export default function FormEmpresa(props) {
  const [validated, setValidated] = useState(false);
  const [empresa, setEmpresa] = useState({
    cnpj: "",
    ie: "",
    razaoSocial: "",
    logradouro: "",
    bairro: "",
    municipio: "",
    uf: "",
    cep: "",
    telefone: "",
    email: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEmpresa((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity()) {
      let empresas = props.listaEmpresas;
      empresas.push(empresa);
      props.setEmpresas(empresas);
      props.chamarTabela();
      form.reset();
    } else {
      setValidated(true);
    }
  };

  const resetSubmit = () => {
    setValidated(false);
  };

  return (
    <div>
      <Cabecalho2 texto1={"Cadastro"} texto2={"Empresa"} />
      <Container className="mt-3">
        <Form
          method="POST"
          action="#"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          onReset={resetSubmit}
        >
          <MenuFormulario acaoBtnVoltar={props.chamarTabela} />
          <Row className="my-3">
            <Col>
              <Form.Group controlId="cnpj">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control
                  type="text"
                  name="cnpj"
                  value={empresa.cnpj}
                  onChange={handleChange}
                  placeholder="00.000.000/0000-00"
                  as={InputMask}
                  mask="99.999.999/9999-99"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  CNPJ é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="ie">
                <Form.Label>Inscrição Estadual</Form.Label>
                <Form.Control
                  type="text"
                  name="ie"
                  value={empresa.ie}
                  onChange={handleChange}
                  placeholder="000.000.000.000"
                  as={InputMask}
                  mask="999.999.999.999"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  IE é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="razaoSocial">
                <Form.Label>Razão Social</Form.Label>
                <Form.Control
                  type="text"
                  name="razaoSocial"
                  value={empresa.razaoSocial}
                  onChange={handleChange}
                  placeholder="Universidade do Oeste Paulista"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Razão Social é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="logradouro">
                <Form.Label>Logradouro</Form.Label>
                <Form.Control
                  type="text"
                  name="logradouro"
                  value={empresa.logradouro}
                  onChange={handleChange}
                  placeholder="R. José Bongiovani, 700"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Logradouro é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="bairro">
                <Form.Label>Bairro</Form.Label>
                <Form.Control
                  type="text"
                  name="bairro"
                  value={empresa.bairro}
                  onChange={handleChange}
                  placeholder="Cidade Universitária"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Bairro é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="municipio">
                <Form.Label>Município</Form.Label>
                <Form.Control
                  type="text"
                  name="municipio"
                  value={empresa.municipio}
                  onChange={handleChange}
                  placeholder="Presidente Prudente"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Município é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="uf">
                <Form.Label>UF</Form.Label>
                <Form.Select
                  name="uf"
                  value={empresa.uf}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  UF é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="cep">
                <Form.Label>CEP</Form.Label>
                <Form.Control
                  type="text"
                  name="cep"
                  value={empresa.cep}
                  onChange={handleChange}
                  placeholder="19050-920"
                  as={InputMask}
                  mask="99999-999"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  CEP é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="telefone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  type="text"
                  name="telefone"
                  value={empresa.telefone}
                  onChange={handleChange}
                  placeholder="(18) 3229-1000"
                  as={InputMask}
                  mask="(99) 9999-9999"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Telefone é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={empresa.email}
                  onChange={handleChange}
                  placeholder="faculdade@unoeste.edu.br"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  E-mail é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}