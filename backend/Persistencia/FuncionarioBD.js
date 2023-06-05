import Funcionario from "../Modelo/Funcionario.js";
import conectar from "./Conexao.js";

export default class FuncionarioBD {
  constructor() {}

  async gravar(funcionario) {
    if (funcionario instanceof Funcionario) {
      const conexao = await conectar();
      let conn = null;

      try {
        conn = await conexao.getConnection();
        await conn.beginTransaction();
        const [response, meta] = await conn.query(
          "INSERT INTO pessoa (nome, telefone, email, endereco, \
            bairro, cidade, cep, uf) VALUES (?,?,?,?,?,?,?,?)",
          [
            funcionario.nome,
            funcionario.telefone,
            funcionario.email,
            funcionario.endereco,
            funcionario.bairro,
            funcionario.cidade,
            funcionario.cep,
            funcionario.uf,
          ]
        );
        await conn.query(
          "INSERT INTO funcionario (cpf,dt_nasc,dt_admissao,dt_demissao,status,nome_usuario,\
            senha_usuario,cargo,Pessoa_codigo) VALUES (?,?,?,?,?,?,?,?,?)",
          [
            funcionario.cpf,
            funcionario.dt_nasc,
            funcionario.dt_admissao,
            funcionario.dt_demissao,
            funcionario.status,
            funcionario.nome_usuario,
            funcionario.senha_usuario,
            funcionario.cargo,
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

  async atualizar(funcionario) {
    if (funcionario instanceof Funcionario) {
      const conexao = await conectar();
      let conn = null;

      try {
        conn = await conexao.getConnection();
        await conn.beginTransaction();
        await conn.query(
          "UPDATE pessoa SET nome=?, telefone=?, email=?, endereco=?, bairro=?, cidade=?,\
          cep=?, uf=? WHERE codigo=?",
          [
            funcionario.nome,
            funcionario.telefone,
            funcionario.email,
            funcionario.endereco,
            funcionario.bairro,
            funcionario.cidade,
            funcionario.cep,
            funcionario.uf,
            funcionario.codigo,
          ]
        );
        await conn.query(
          "UPDATE funcionario SET cpf=?,dt_nasc=?,dt_admissao=?\
          ,dt_demissao=?,status=?,nome_usuario=?,senha_usuario=?,cargo=? WHERE Pessoa_codigo=?",
          [
            funcionario.cpf,
            funcionario.dt_nasc,
            funcionario.dt_admissao,
            funcionario.dt_demissao,
            funcionario.status,
            funcionario.nome_usuario,
            funcionario.senha_usuario,
            funcionario.cargo,
            funcionario.codigo,
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

  async excluir(funcionario) {
    if (funcionario instanceof Funcionario) {
      const conexao = await conectar();
      let conn = null;

      try {
        conn = await conexao.getConnection();
        await conn.beginTransaction();
        await conn.query(
          "DELETE FROM funcionario WHERE Pessoa_codigo=?",
          funcionario.codigo
        );

        await conn.query(
          "DELETE FROM pessoa WHERE codigo=?",
          funcionario.codigo
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

  async consultar() {
    const conexao = await conectar();

    const sql =
      "SELECT p.codigo, p.nome, p.telefone, p.email, p.endereco, p.bairro, p.cidade, p.cep, p.uf,\
    e.cpf, e.dt_nasc, e.dt_admissao, e.dt_demissao, e.status, e.nome_usuario, e.senha_usuario, e.cargo \
    FROM pessoa p \
    INNER JOIN funcionario e \
    ON e.Pessoa_codigo = p.codigo";
    const [rows] = await conexao.query(sql);
    const listaFuncionario = [];
    for (const row of rows) {
      const funcionario = new Funcionario(
        row["codigo"],
        row["cpf"],
        row["dt_nasc"],
        row["dt_admissao"],
        row["dt_demissao"],
        row["status"],
        row["nome_usuario"],
        row["senha_usuario"],
        row["cargo"],
        row["nome"],
        row["telefone"],
        row["email"],
        row["endereco"],
        row["bairro"],
        row["cidade"],
        row["cep"],
        row["uf"]
      );
      listaFuncionario.push(funcionario);
    }
    return listaFuncionario;
  }
}
