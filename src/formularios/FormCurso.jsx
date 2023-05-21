import { Container, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import MenuFormulario from "../templates/MenuFormulario";
import Cabecalho2 from "../templates/Cabecalho2";

export default function FormCurso(props) {
  const [validated, setValidated] = useState(false);
  const [curso, setCurso] = useState({
    codigo: "",
    nome: "",
    sala: "",
    eixo: "",
    cargaHoras: "",
    professor: "",
    dtCriacao: "",
    dtDesativacao: "",
  });

  useEffect(() => {
    setCurso(() => ({ codigo: props.listaCursos.length+1 }));
  }, [props]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCurso((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity()) {
      let cursos = props.listaCursos;
      cursos.push(curso);
      props.setCursos(cursos);
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
      <Cabecalho2 texto1={"Cadastro"} texto2={"Curso"} />
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
                  value={curso.codigo}
                  disabled
                />
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
                  value={curso.nome}
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
                  value={curso.sala}
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
                  value={curso.eixo}
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
                  value={curso.professor}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Albert Einstein">Albert Einstein</option>
                  <option value="Isaac Newton">Isaac Newton</option>
                  <option value="Marie Curie">Marie Curie</option>
                  <option value="Stephen Hawking">Stephen Hawking</option>
                  <option value="Hannah Arendt">Hannah Arendt</option>
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
                  value={curso.cargaHoras}
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
                  value={curso.dtCriacao}
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
                  value={curso.dtDesativacao}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
