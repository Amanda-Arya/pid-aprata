import { Container, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import MenuFormulario from "../templates/MenuFormulario";
import Cabecalho2 from "../templates/Cabecalho2";

export default function FormTurma(props) {
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.aoMudarTurma((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity()) {
      const turmas = props.listaTurmas;
      // Retorna o objeto igual ao código selecionado
      const obj = turmas.filter((i) => i.codigo == props.turma.codigo);

      if (obj.length) {
        // Retorna o index do objeto a ser substituído (Editado)
        const isEqualTo = (turma) => turma.codigo == obj[0].codigo;
        const index = turmas.findIndex(isEqualTo);
        // Substitui o objeto
        turmas[index] = props.turma;
      } else {
        turmas.push(props.turma);
      }
      props.setTurmas(turmas);
      alert("Dados registrados com sucesso.");
    } else {
      setValidated(true);
    }
  };

  return (
    <div>
      <Cabecalho2 texto1={"Cadastro"} texto2={"Turma"} />
      <Container className="mt-3">
        <Form
          method="POST"
          action="#"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <MenuFormulario acaoBtnVoltar={() => props.chamarTabela()} />
          <Row className="my-3">
            <Col xs={6}>
              <Form.Group controlId="codigo">
                <Form.Label>Código</Form.Label>
                <Form.Control
                  type="text"
                  name="codigo"
                  value={props.turma.codigo || ""}
                  disabled
                />
                <Form.Control.Feedback type="invalid">
                  Código é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="periodo">
                <Form.Label>Período</Form.Label>
                <Form.Select
                  name="periodo"
                  onChange={handleChange}
                  value={props.turma.periodo || ""}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Matutino">Matutino</option>
                  <option value="Vespertino">Vespertino</option>
                  <option value="Noturno">Noturno</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Período é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="anoLetivo">
                <Form.Label>Ano Letivo</Form.Label>
                <Form.Control
                  type="text"
                  name="anoLetivo"
                  value={props.turma.anoLetivo || ""}
                  onChange={handleChange}
                  placeholder="2023"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Ano Letivo é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="cursos">
                <Form.Label>Cursos</Form.Label>
                <Form.Control
                  type="text"
                  name="cursos"
                  value={props.turma.cursos || ""}
                  onChange={handleChange}
                  placeholder="Cursos"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Cursos são obrigatórios.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="dtInicio">
                <Form.Label>Data Início</Form.Label>
                <Form.Control
                  type="date"
                  name="dtInicio"
                  value={props.turma.dtInicio || ""}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Data de Início é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="dtFim">
                <Form.Label>Data Fim</Form.Label>
                <Form.Control
                  type="date"
                  value={props.turma.dtFim || ""}
                  name="dtFim"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={props.turma.status || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Status é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="vagas">
                <Form.Label>Vagas</Form.Label>
                <Form.Control
                  type="text"
                  name="vagas"
                  value={props.turma.vagas || ""}
                  onChange={handleChange}
                  placeholder="20"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Vagas é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="sala">
                <Form.Label>Sala</Form.Label>
                <Form.Select
                  name="sala"
                  value={props.turma.sala || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Sala é obrigatório.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
