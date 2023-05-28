import { Container, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import MenuFormulario from "../templates/MenuFormulario";
import Cabecalho2 from "../templates/Cabecalho2";
import InputMask from 'react-input-mask';

export default function FormAluno(props) {
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    props.aoMudarAluno((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity()) {
      const alunos = props.listaAlunos;
      const obj = alunos.filter((i) => i.codigo == props.aluno.codigo);

      if (obj.length) {
        // Retorna o index do objeto a ser substituído (Editado)
        const isEqualTo = (aluno) => aluno.codigo == obj[0].codigo;
        const index = alunos.findIndex(isEqualTo);
        // Substitui o objeto
        alunos[index] = props.aluno;
      } else {
        alunos.push(props.aluno);
      }
      props.setAlunos(alunos);
      alert("Dados registrados com sucesso.");
    } else {
      setValidated(true);
    }
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
                                    value={props.aluno.nome || ""}
                                    onChange={handleChange}
                                    placeholder="Digite o nome do Aluno"
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
                                    value={props.aluno.nomeMae || ""}
                                    onChange={handleChange}
                                    placeholder="Digite o nome da mãe"
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
                                    value={props.aluno.rg || ""}
                                    onChange={handleChange}
                                    placeholder="Digite o RG"
                                    as={InputMask}
                                    mask="99.999.999-9"
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
                                    value={props.aluno.cpf || ""}
                                    onChange={handleChange}
                                    placeholder="Digite o CPF"
                                    as={InputMask}
                                    mask="999.999.999-99"
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
                                    value={props.aluno.dtNascimento || ""}
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
                                    value={props.aluno.endereco || ""}
                                    onChange={handleChange}
                                    placeholder="Digite o endereço"
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
                                    value={props.aluno.bairro || ""}
                                    onChange={handleChange}
                                    placeholder="Digite o bairro"
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
                                    value={props.aluno.cidade || ""}
                                    onChange={handleChange}
                                    placeholder="Digite a cidade"
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
                                    value={props.aluno.uf || ""}
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
                                    value={props.aluno.tel || ""}
                                    onChange={handleChange}
                                    placeholder="Digite o telefone"
                                    as={InputMask}
                                    mask="(99)9999-9999"
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
                                    value={props.aluno.escola || ""}
                                    onChange={handleChange}
                                    placeholder="Digite a escola"
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
                                    value={props.aluno.serie || ""}
                                    name="serie"
                                    onChange={handleChange}
                                    placeholder="Digite a série"
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
                  value={props.aluno.periodo || ""}
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