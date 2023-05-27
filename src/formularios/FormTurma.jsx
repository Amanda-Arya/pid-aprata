import { Container, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import MenuFormulario from "../templates/MenuFormulario";
import Cabecalho2 from "../templates/Cabecalho2";
import InputMask from 'react-input-mask';

export default function FormTurma(props) {
    const [validated, setValidated] = useState(false);
    const [turma, setTurma] = useState({
        codigo: "",
        periodo: "",
        anoLetivo: "",
        cursos: "",
        dtInicio: "",
        dtFim: "",
        status: "",
        vagas: "",
        sala: ""
    });

    useEffect(() => {
        setTurma(() => ({ codigo: props.listaTurmas.length + 1 }));
    }, [props]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTurma((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity()) {
            let turmas = props.listaTurmas;
            turmas.push(turma);
            props.setTurmas(turmas);
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
            <Cabecalho2 texto1={"Cadastro"} texto2={"Turma"} />
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
                        <Col xs={6}>
                            <Form.Group controlId="codigo">
                                <Form.Label>Código</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="codigo"
                                    value={turma.codigo}
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
                                    value={turma.periodo}
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="1">Matutino</option>
                                    <option value="2">Vespertino</option>
                                    <option value="3">Noturno</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Período é obrigatório.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="ano">
                                <Form.Label>Ano Letivo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ano"
                                    value={turma.ano}
                                    onChange={handleChange}
                                    placeholder="2023"
                                    as={InputMask}
                                    mask="9999"
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
                                    value={turma.cursos}
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
                                    value={turma.dtInicio}
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
                                    value={turma.dtFim}
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
                                    value={turma.status}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="1">Ativo</option>
                                    <option value="2">Desativado</option>

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
                                    value={turma.vagas}
                                    onChange={handleChange}
                                    placeholder="20"
                                    as={InputMask}
                                    mask="999"
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
                                    value={turma.sala}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="2">3</option>
                                    <option value="2">4</option>
                                    <option value="2">5</option>

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