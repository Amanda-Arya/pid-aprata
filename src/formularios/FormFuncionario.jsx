import { Container, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import MenuFormulario from "../templates/MenuFormulario";
import Cabecalho2 from "../templates/Cabecalho2";

export default function FormFuncionario(props) {
  const [validated, setValidated] = useState(false);
  const [funcionario, setFuncionario] = useState({
    cpf: "",
    nome: "",
    dtNascimento: "",
    dtAdmissao: "",
    dtDemissao: "",
    statusAtual: "",
    cargo : "",
    endereco : "",
    bairro: "",
    municipio: "",
    uf: "",
    cep: "",
    telefone: "",
    email: "",
    usuario: "",
    senha: ""
  })

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFuncionario((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity()) {
      let funcionarios = props.listaFuncionarios;
      funcionarios.push(funcionario);
      props.setFuncionarios(funcionarios);
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
      <Cabecalho2 texto1={"Cadastro"} texto2={"Funcionario"} />
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
              <Form.Group controlId="nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={funcionario.nome}
                  onChange={handleChange}
                  placeholder="Rodrigo Nascimento"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Nome é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="cpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  type="text"
                  name="cpf"
                  value={funcionario.cpf}
                  onChange={handleChange}
                  placeholder="000.000.000-00"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  CPF é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="dtNascimento">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                  type="date"
                  name="dtNascimento"
                  value={funcionario.dtNascimento}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Data de Nascimento é obrigatória.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="dtAdmissao">
                <Form.Label>Data de Admissão</Form.Label>
                <Form.Control
                  type="date"
                  name="dtAdmissao"
                  value={funcionario.dtAdmissao}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Data de Admissão é obrigatória.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="dtDemissao">
                <Form.Label>Data de Demissão</Form.Label>
                <Form.Control
                  type="date"
                  name="dtDemissao"
                  value={funcionario.dtDemissao}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Data de Demissão é obrigatória.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="statusAtual">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="statusAtual"
                  value={funcionario.statusAtual}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="1">Ativo</option>
                  <option value="2">Desativado</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Status atual é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="cargo">
                <Form.Label>Cargo</Form.Label>
                <Form.Select
                  name="cargo"
                  value={funcionario.cargo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="1">Professor</option>
                  <option value="2">Orientador</option>
                  <option value="3">Administrativo</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Cargo é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="endereco">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  type="text"
                  name="endereco"
                  value={funcionario.endereco}
                  onChange={handleChange}
                  placeholder="R. José Bongiovani, 700"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Endereco é obrigatório.
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
                  value={funcionario.bairro}
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
                  value={funcionario.municipio}
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
                  value={funcionario.uf}
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
                  value={funcionario.cep}
                  onChange={handleChange}
                  placeholder="19050-920"
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
                  value={funcionario.telefone}
                  onChange={handleChange}
                  placeholder="(18) 3229-1000"
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
                  type="text"
                  name="email"
                  value={funcionario.email}
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

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="usuario">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="usuario"
                  value={funcionario.usuario}
                  onChange={handleChange}
                  placeholder="Usuário"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Usuário é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="text"
                  name="senha"
                  value={funcionario.senha}
                  onChange={handleChange}
                  placeholder="senha123"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Senha é obrigatória.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

        </Form>
      </Container>
    </div>
  );
}