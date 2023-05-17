import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import MenuAcao from "../templates/MenuAcao";

export default function FormCurso(props) {
  const [inputs, setInputs] = useState({});
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity()) {
      console.log(inputs);
      form.reset();
    } else {
      setValidated(true);
    }
  };

  const resetSubmit = () => {
    setValidated(false);
  };

  return (
    <>
      <Form
        method="POST"
        action="#"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        onReset={resetSubmit}
      >
        <MenuAcao chamarTabela={props.chamarTabela} />
        <Row className="mb-3">
          <Col xs={3}>
            <Form.Group controlId="codigo">
              <Form.Label>Código</Form.Label>
              <Form.Control type="text" name="codigo" disabled />
              <Form.Control.Feedback type="invalid">
                CNPJ é obrigatório.
              </Form.Control.Feedback>
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
                onChange={handleChange}
                placeholder="Informática"
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
            <Form.Group controlId="sala">
              <Form.Label>Sala</Form.Label>
              <Form.Control
                type="text"
                name="sala"
                onChange={handleChange}
                placeholder="Sala 2"
                required
              />
              <Form.Control.Feedback type="invalid">
                Sala é obrigatório.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="eixo">
              <Form.Label>Eixo</Form.Label>
              <Form.Control
                type="text"
                name="eixo"
                onChange={handleChange}
                placeholder="Auxiliar em Montagem e Manutenção de Computadores"
                required
              />
              <Form.Control.Feedback type="invalid">
                Eixo é obrigatório.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="professor">
              <Form.Label>Professor</Form.Label>
              <Form.Select
                name="professor"
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="1">Albert Einstein</option>
                <option value="2">Isaac Newton</option>
                <option value="3">Marie Curie</option>
                <option value="4">Stephen Hawking</option>
                <option value="5">Hannah Arendt</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Professor é obrigatório.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="cargaHoras">
              <Form.Label>Carga Horária</Form.Label>
              <Form.Control
                type="text"
                name="cargaHoras"
                onChange={handleChange}
                placeholder="120 horas"
                required
              />
              <Form.Control.Feedback type="invalid">
                Carga Horária é obrigatório.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="dtCriacao">
              <Form.Label>Criado em</Form.Label>
              <Form.Control
                type="date"
                name="dtCriacao"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Data de criação é obrigatório.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="dtDesativacao">
              <Form.Label>Desativado em</Form.Label>
              <Form.Control
                type="date"
                name="dtDesativacao"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
}
