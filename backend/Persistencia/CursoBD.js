import Curso from "../Modelo/Curso.js";
import conectar from "./Conexao.js";

export default class CursoBD {
  constructor() {}

  async gravar(curso) {
    if (curso instanceof Curso) {
      const conexao = await conectar();

      const sql =
        "INSERT INTO curso(nome, sala, eixo, carga_h, dt_criacao, dt_desativacao) VALUES (?,?,?,?,?,?)";
      const parametros = [
        curso.nome,
        curso.sala,
        curso.eixo,
        curso.carga_horas,
        curso.dt_criacao,
        curso.dt_desativacao,
      ];

      await conexao.query(sql, parametros);
    }
  }

  async atualizar(curso) {
    if (curso instanceof Curso) {
      const conexao = await conectar();

      const sql =
        "UPDATE curso SET nome=?, sala=?, eixo=?, carga_h=?, dt_criacao=?, dt_Desativacao=? WHERE codigo=?";
      const parametros = [
        curso.nome,
        curso.sala,
        curso.eixo,
        curso.carga_horas,
        curso.dt_criacao,
        curso.dt_desativacao,
        curso.codigo,
      ];

      await conexao.query(sql, parametros);
    }
  }

  async excluir(curso) {
    if (curso instanceof Curso) {
      const conexao = await conectar();
      const sql = "DELETE FROM curso WHERE codigo=?";
      await conexao.query(sql, curso.codigo);
    }
  }

  async consultar() {
    const conexao = await conectar();

    const sql = "SELECT * FROM curso ORDER BY nome ASC";
    const [response] = await conexao.query(sql);

    const listaCursos = [];
    for (const row of response) {
      const curso = new Curso(
        row["codigo"],
        row["nome"],
        row["sala"],
        row["eixo"],
        row["carga_h"],
        row["dt_criacao"],
        row["dt_desativacao"]
      );
      listaCursos.push(curso);
    }
    return listaCursos;
  }

}
