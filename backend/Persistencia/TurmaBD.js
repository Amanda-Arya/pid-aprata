import Turma from "../Modelo/Turma.js";
import conectar from "./Conexao.js";

export default class TurmaBD {
  constructor() {}

  async gravar(turma) {
    if (turma instanceof Turma) {
      const conexao = await conectar();

      const sql =
        "INSERT INTO turma(periodo, ano_letivo, dt_inicio, dt_fim, status, vagas, Funcionario_codigo, Curso_codigo) VALUES (?,?,?,?,?,?,?,?)";
      const parametros = [
        turma.periodo,
        turma.ano_letivo,
        turma.dt_inicio,
        turma.dt_fim,
        turma.status,
        turma.vagas,
        turma.funcionario,
        turma.curso,
      ];
      await conexao.query(sql, parametros);
    }
  }

  async atualizar(turma) {
    if (turma instanceof Turma) {
      const conexao = await conectar();
      const sql =
        "UPDATE turma SET periodo=?, ano_letivo=?, dt_inicio=?, dt_fim=?, status=?, vagas=?, Funcionario_codigo=?, Curso_codigo=? WHERE codigo=?";
      const parametros = [
        turma.periodo,
        turma.ano_letivo,
        turma.dt_inicio,
        turma.dt_fim,
        turma.status,
        turma.vagas,
        turma.funcionario,
        turma.curso,
        turma.codigo,
      ];
      await conexao.query(sql, parametros);
    }
  }

  async excluir(turma) {
    if (turma instanceof Turma) {
      const conexao = await conectar();
      const sql = "DELETE FROM turma WHERE codigo=?";
      await conexao.query(sql, turma.codigo);
    }
  }

  async consultar() {
    const conexao = await conectar();

    const sql =
      "SELECT t.*, p.nome as funcionario_nome, c.nome as curso_nome \
      FROM turma t \
      INNER JOIN funcionario f \
      ON f.codigo = t.Funcionario_codigo \
      INNER JOIN pessoa p \
      ON p.codigo = f.Pessoa_codigo \
      INNER JOIN curso c \
      ON c.codigo = t.Curso_codigo";
    const [response] = await conexao.query(sql);
    return response;
    //   const listaTurmas = [];
    //   for (const row of response) {
    //     const turma = new Turma(
    //       row["codigo"],
    //       row["periodo"],
    //       row["ano_letivo"],
    //       row["dt_inicio"],
    //       row["dt_fim"],
    //       row["status"],
    //       row["vagas"],
    //       row["funcionario"],
    //       row["curso"]
    //     );
    //     listaTurmas.push(turma);
    //   }
    //   return listaTurmas;
    // }
  }
}
