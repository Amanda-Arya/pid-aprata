import { Container, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import MenuFormulario from "../templates/MenuFormulario";
import Cabecalho2 from "../templates/Cabecalho2";

export default function FormCurso({
  curso,
  aoMudarCurso,
  listaCursos,
  setCursos,
  chamarTabela,
}) {
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    aoMudarCurso((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity()) {
      const cursos = listaCursos;
      // Retorna o objeto igual ao código selecionado
      const obj = cursos.filter((i) => i.codigo == curso.codigo);

      if (obj.length) {
        // Retorna o index do objeto a ser substituído (Editado)
        const isEqualTo = (curso) => curso.codigo == obj[0].codigo;
        const index = cursos.findIndex(isEqualTo);
        // Substitui o objeto
        cursos[index] = curso;
      } else {
        cursos.push(curso);
      }
      setCursos(cursos);
      alert("Dados registrados com sucesso.");
    } else {
      setValidated(true);
    }
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
        >
          <MenuFormulario acaoBtnVoltar={() => chamarTabela()} />
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
                  value={curso.nome || ""}
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
                  value={curso.sala || ""}
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
                  value={curso.eixo || ""}
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
                  value={curso.professor || ""}
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
                  value={curso.cargaHoras || ""}
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
                  value={curso.dtCriacao || ""}
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
                  value={curso.dtDesativacao || ""}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}
