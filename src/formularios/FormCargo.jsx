import { Container, Col, Form, Row, FormGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import MenuFormulario from "../templates/MenuFormulario";
import Cabecalho2 from "../templates/Cabecalho2";

export default function FormCargo(props) {
  const [validated, setValidated] = useState(false);
  const [cargo, setCargo] = useState({
    codigo: "",
    nome: "",
    descricao: "",
  });

  useEffect(() => {
    setCargo(() => ({ codigo: props.listaCargos.length + 1 }));
  }, [props]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCargo((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity()) {
      let cargos = props.listaCargos;
      cargos.push(cargo)
      props.setCargos(cargos);
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
      <Cabecalho2 texto1={"Cadastro"} texto2={"Cargo"} />
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
          <Row className="mb-3">
            <Col xs={6}>
              <Form.Group controlId="codigo">
                <Form.Label>Código</Form.Label>
                <Form.Control
                  type="text"
                  name="codigo"
                  value={cargo.codigo}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={cargo.nome}
                  onChange={handleChange}
                  placeholder="Administrativo"
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
              <Form.Group controlId="descricao">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  as="textarea"
                  name="descricao"
                  onChange={handleChange}
                  value={cargo.descricao}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Descrição é obrigatória.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <FormGroup controlId="nivelAcesso">
                <Form.Check type="switch" name="nivelAcesso" label="Cadastro" inline />
                <Form.Check type="switch" name="nivelAcesso" label="Consulta" inline />
                <Form.Check type="switch" name="nivelAcesso" label="Exclusão" inline />
                <Form.Check type="switch" name="nivelAcesso" label="Alteração" inline />
                <Form.Check type="switch" name="nivelAcesso" label="Relatórios" inline />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    </div >
  );
}