import { Container, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import MenuFormulario from "../templates/MenuFormulario";
import Cabecalho2 from "../templates/Cabecalho2";

export default function FormAluno(props) {
    const [validated, setValidated] = useState(false);
    const [aluno, setAluno] = useState({
        codigo: "",
        cpf: "",
        nome: "",
        dtNascimento: "",
        nomeMae: "",
        rg: "",
        endereco: "",
        bairro: "",
        cidade: "",
        uf: "",
        tel: "",
        escola: "",
        serie: "",
        periodo: "",
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAluno((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity()) {
            let alunos = props.listaAlunos;
            alunos.push(aluno);
            props.setAlunos(alunos);
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
            <Cabecalho2 texto1={"Cadastro"} texto2={"Aluno"} />
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
                                    value={aluno.nome}
                                    onChange={handleChange}
                                    placeholder="Miguel da Silva"
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
                            <Form.Group controlId="nomeMae">
                                <Form.Label>Nome da Mãe</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nomeMae"
                                    value={aluno.nomeMae}
                                    onChange={handleChange}
                                    placeholder="Julia Silva"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Nome da Mãe é obrigatório.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="rg">
                                <Form.Label>RG</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="rg"
                                    value={aluno.rg}
                                    onChange={handleChange}
                                    placeholder="XXXXXXXX-X"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    RG é obrigatório.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="cpf">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cpf"
                                    value={aluno.cpf}
                                    onChange={handleChange}
                                    placeholder="XXX.XXX.XXX-XX"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    CPF é obrigatório.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col xs={6}>
                            <Form.Group controlId="dtNascimento">
                                <Form.Label>Data de Nascimento</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dtNascimento"
                                    value={aluno.dtNascimento}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Data de Nascimento é obrigatório.
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
                                    value={aluno.endereco}
                                    onChange={handleChange}
                                    placeholder="Rua AAAAAAAA"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Endereço é obrigatório.
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
                                    value={aluno.bairro}
                                    onChange={handleChange}
                                    placeholder="Vila AAAAAAAAAAA"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Bairro é obrigatório.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="cidade">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cidade"
                                    value={aluno.cidade}
                                    onChange={handleChange}
                                    placeholder="Osasco"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Cidade é obrigatório.
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
                                    value={aluno.uf}
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
                            <Form.Group controlId="tel">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tel"
                                    value={aluno.tel}
                                    onChange={handleChange}
                                    placeholder="(XX)XXXX-XXXX"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Telefone é obrigatório.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="escola">
                                <Form.Label>Escola</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="escola"
                                    value={aluno.escola}
                                    onChange={handleChange}
                                    placeholder="EMEF AAAAAAAAA"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Escola é obrigatório.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="serie">
                                <Form.Label>Serie</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={aluno.serie}
                                    name="serie"
                                    onChange={handleChange}
                                    placeholder="9 ano"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Serie é obrigatório.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="periodo">
                                <Form.Label>Período</Form.Label>
                                <Form.Select
                                    name="periodo"
                                    onChange={handleChange}
                                    value={aluno.periodo}
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
                    </Row>
                    <Row className="my-4">
                        <Col>
                            <Form.Group className="mb-3" controlId="termComp">
                                <Form.Check type="checkbox" label="Termo de Compromisso" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="compFamiliar">
                                <Form.Check type="checkbox" label="Composição Familiar" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}