import { Table } from "react-bootstrap";
import { BotaoNovo } from "../templates/Botoes";
import Cabecalho2 from "../templates/Cabecalho2";
import { Container } from "react-bootstrap";
import MenuTabela from "../templates/MenuTabela";

export default function TabelaCadastroAlunos(props) {
    function excluirAlunos(codigo) {
        const listaAtualizada = props.listaAlunos.filter(
            (aluno) => aluno.codigo !== codigo
        );
        props.setAlunos(listaAtualizada);
    }

    return (
        <div>
            <Cabecalho2 texto1={"Consulta"} texto2={"Alunos"} />
            <Container className="mt-3">
                <div className="d-flex mb-3">
                    <BotaoNovo acaoBtnNovo={props.chamarCadastro} />
                </div>
                <Table hover style={{ fontSize: "14px" }}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>NomeMae</th>
                            <th>RG</th>
                            <th>CPF</th>
                            <th>Data de Nascimento</th>
                            <th>Endereco</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Telefone</th>
                            <th>Escola</th>
                            <th>Serie</th>
                            <th>Periodo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.listaAlunos.map((aluno, i) => {
                            return (
                                <tr key={i}>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.nomeMae}</td>
                                    <td>{aluno.rg}</td>
                                    <td>{aluno.cpf}</td>
                                    <td>{aluno.dtNascimento}</td>
                                    <td>{aluno.endereco}</td>
                                    <td>{aluno.bairro}</td>
                                    <td>{aluno.cidade}</td>
                                    <td>{aluno.uf}</td>
                                    <td>{aluno.tel}</td>
                                    <td>{aluno.escola}</td>
                                    <td>{aluno.serie}</td>
                                    <td>{aluno.periodo}</td>
                                    <td>
                                        <MenuTabela
                                            acaoBtnExcluir={() => {
                                                if (window.confirm("Confirma a exclusão do item?")) {
                                                    excluirAlunos(aluno.codigo);
                                                }
                                            }}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}