import Empresa from "../Modelo/Empresa.js";
import conectar from "./Conexao.js";

export default class EmpresaBD {
  constructor() {}

  async gravar(empresa) {
    if (empresa instanceof Empresa) {
      const conexao = await conectar();
      let conn = null;

      try {
        conn = await conexao.getConnection();
        await conn.beginTransaction();
        // const [response, meta] = await conn.query("SELECT * FROM tbl_sample");
        // console.log(response, meta);
        const [response, meta] = await conn.query(
          "INSERT INTO pessoa (nome, telefone, email, endereco, bairro, cidade, cep, uf) VALUES (?,?,?,?,?,?,?,?)",
          [
            empresa.razao_social,
            empresa.telefone,
            empresa.email,
            empresa.endereco,
            empresa.bairro,
            empresa.cidade,
            empresa.cep,
            empresa.uf,
          ]
        );
        await conn.query(
          "INSERT INTO empresa (cnpj, ie, proprietario, Pessoa_codigo) VALUES (?,?,?,?)",
          [empresa.cnpj, empresa.ie, empresa.proprietario, response.insertId]
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

  async atualizar(empresa) {
    if (empresa instanceof Empresa) {
      const conexao = await conectar();
      let conn = null;

      try {
        conn = await conexao.getConnection();
        await conn.beginTransaction();
        // const [response, meta] = await conn.query("SELECT * FROM tbl_sample");
        // console.log(response, meta);
        await conn.query(
          "UPDATE pessoa SET nome=?, telefone=?, email=?, endereco=?, bairro=?, cidade=?, cep=?, uf=? WHERE codigo=?",
          [
            empresa.razao_social,
            empresa.telefone,
            empresa.email,
            empresa.endereco,
            empresa.bairro,
            empresa.cidade,
            empresa.cep,
            empresa.uf,
            empresa.codigo,
          ]
        );

        await conn.query(
          "UPDATE empresa SET cnpj=?, ie=?, proprietario=? WHERE Pessoa_codigo=?",
          [empresa.cnpj, empresa.ie, empresa.proprietario, empresa.codigo]
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

  async excluir(empresa) {
    if (empresa instanceof Empresa) {
      const conexao = await conectar();
      let conn = null;

      try {
        conn = await conexao.getConnection();
        await conn.beginTransaction();
        await conn.query(
          "DELETE FROM empresa WHERE Pessoa_codigo=?",
          empresa.codigo
        );

        await conn.query("DELETE FROM pessoa WHERE codigo=?", empresa.codigo);

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
      e.cnpj, e.ie, e.proprietario \
      FROM pessoa p \
      INNER JOIN empresa e \
      ON e.Pessoa_codigo = p.codigo";

    const [rows] = await conexao.query(sql);
    const listaEmpresas = [];
    for (const row of rows) {
      const empresa = new Empresa(
        row["codigo"],
        row["cnpj"],
        row["ie"],
        row["nome"],
        row["telefone"],
        row["email"],
        row["proprietario"],
        row["endereco"],
        row["bairro"],
        row["cidade"],
        row["cep"],
        row["uf"]
      );
      listaEmpresas.push(empresa);
    }
    return listaEmpresas;
  }

  // async consultarTermo(termo) {
  //   const conexao = await conectar();

  //   const sql =
  //     "SELECT * \
  //     FROM pessoa p \
  //     JOIN empresa e \
  //     ON p.codigo = e.Pessoa_codigo \
  //     WHERE CONCAT_WS('|', p.nome, e.cnpj) LIKE ?";

  //   const param = ["%" + termo + "%"];
  //   const [rows] = await conexao.query(sql, param);
  //   const listaEmpresas = [];

  //   for (const row of rows) {
  //     const empresa = new Empresa(
  //       row["codigo"],
  //       row["cnpj"],
  //       row["ie"],
  //       row["nome"],
  //       row["telefone"],
  //       row["email"],
  //       row["proprietario"],
  //       row["endereco"],
  //       row["bairro"],
  //       row["cidade"],
  //       row["cep"],
  //       row["uf"]
  //     );
  //     listaEmpresas.push(empresa);
  //   }
  //   return listaEmpresas;
  // }
}
