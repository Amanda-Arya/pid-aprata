import Aluno from "../Modelo/Aluno.js";
import conectar from "./Conexao.js";

export default class AlunoBD {
  constructor() {}

  async gravar(aluno) {
    if (aluno instanceof Aluno) {
      const conexao = await conectar();
      let conn = null;

      try {
        conn = await conexao.getConnection();
        await conn.beginTransaction();
        const [response, meta] = await conn.query(
          "INSERT INTO pessoa (nome, telefone, email, endereco, bairro, cidade, cep, uf) VALUES (?,?,?,?,?,?,?,?)",
          [
            aluno.nome,
            aluno.telefone,
            aluno.email,
            aluno.endereco,
            aluno.bairro,
            aluno.cidade,
            aluno.cep,
            aluno.uf,
          ]
        );
        await conn.query(
          "INSERT INTO aluno (rg,cpf,nome_mae,dt_nasc,escola,serie,periodo,Pessoa_codigo) VALUES (?,?,?,?,?,?,?,?)",
          [
            aluno.rg,
            aluno.cpf,
            aluno.nome_mae,
            aluno.dt_nasc,
            aluno.escola,
            aluno.serie,
            aluno.periodo,
            response.insertId,
          ]
        );
        await conn.commit();
      } catch (error) {
        if (conn) await conn.rollback();
        throw error;
      } finally {
        if (conn) conn.release();
      }
    }
  }

  async atualizar(aluno) {
    if (aluno instanceof Aluno) {
      const conexao = await conectar();
      let conn = null;

      try {
        conn = await conexao.getConnection();
        await conn.beginTransaction();
        await conn.query(
          "UPDATE pessoa SET nome=?, telefone=?, email=?, endereco=?, bairro=?, cidade=?, cep=?, uf=? WHERE codigo=?",
          [
            aluno.nome,
            aluno.telefone,
            aluno.email,
            aluno.endereco,
            aluno.bairro,
            aluno.cidade,
            aluno.cep,
            aluno.uf,
            aluno.codigo,
          ]
        );

        await conn.query(
          "UPDATE aluno SET rg=?,cpf=?,nome_mae=?,dt_nasc=?,escola=?,serie=?,periodo=? WHERE Pessoa_codigo=?",
          [
            aluno.rg,
            aluno.cpf,
            aluno.nome_mae,
            aluno.dt_nasc,
            aluno.escola,
            aluno.serie,
            aluno.periodo,
            aluno.codigo,
          ]
        );

        await conn.commit();
      } catch (error) {
        if (conn) await conn.rollback();
        throw error;
      } finally {
        if (conn) conn.release();
      }
    }
  }

  async excluir(aluno) {
    if (aluno instanceof Aluno) {
      const conexao = await conectar();
      let conn = null;

      try {
        conn = await conexao.getConnection();
        await conn.beginTransaction();
        await conn.query(
          "DELETE FROM aluno WHERE Pessoa_codigo=?",
          aluno.codigo
        );

        await conn.query("DELETE FROM pessoa WHERE codigo=?", aluno.codigo);

        await conn.commit();
      } catch (error) {
        if (conn) await conn.rollback();
        throw error;
      } finally {
        if (conn) conn.release();
      }
    }
  }

  async consultar() {
    const conexao = await conectar();

    const sql =
      "SELECT p.codigo, p.nome, p.telefone, p.email, p.endereco, p.bairro, p.cidade, p.cep, p.uf, \
      e.rg, e.cpf, e.nome_mae, e.dt_nasc, e.escola, e.serie, e.periodo \
      FROM pessoa p \
      INNER JOIN aluno e \
      ON e.Pessoa_codigo = p.codigo ORDER BY p.nome";

    const [rows] = await conexao.query(sql);
    const listaAlunos = [];
    for (const row of rows) {
      const aluno = new Aluno(
        row["codigo"],
        row["rg"],
        row["cpf"],
        row["nome_mae"],
        row["dt_nasc"],
        row["escola"],
        row["serie"],
        row["periodo"],
        row["nome"],
        row["telefone"],
        row["email"],
        row["endereco"],
        row["bairro"],
        row["cidade"],
        row["cep"],
        row["uf"]
      );
      listaAlunos.push(aluno);
    }
    return listaAlunos;
  }
}
