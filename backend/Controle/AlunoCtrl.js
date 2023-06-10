import Aluno from "../Modelo/Aluno.js";

export default class AlunoCTRL {
  gravar(req, res) {
    res.type("application/json");
    if (req.method === "POST" && req.is("application/json")) {
      const dados = req.body;
      const rg = dados.rg;
      const cpf = dados.cpf;
      const nome_mae = dados.nome_mae;
      const dt_nasc = dados.dt_nasc;
      const escola = dados.escola;
      const serie = dados.serie;
      const periodo = dados.periodo;
      const nome = dados.nome;
      const telefone = dados.telefone;
      const email = dados.email;
      const endereco = dados.endereco;
      const bairro = dados.bairro;
      const cidade = dados.cidade;
      const cep = dados.cep;
      const uf = dados.uf;

      if (
        rg &&
        cpf &&
        nome_mae &&
        dt_nasc &&
        escola &&
        serie &&
        periodo &&
        nome &&
        telefone &&
        email &&
        endereco &&
        bairro &&
        cidade &&
        cep &&
        uf
      ) {
        const aluno = new Aluno(
          null, //codigo
          rg,
          cpf,
          nome_mae,
          dt_nasc,
          escola,
          serie,
          periodo,
          nome,
          telefone,
          email,
          endereco,
          bairro,
          cidade,
          cep,
          uf
        );
        aluno
          .gravar()
          .then(() => {
            res.status(200).json({
              status: true,
              mensagem: "Dados gravados com sucesso!",
            });
          })
          .catch((erro) => {
            res.status(500).json({
              status: false,
              mensagem: erro.message,
            });
          });
      } else {
        res.status(400).json({
          status: false,
          mensagem: "Dados insuficientes! Consulte a documentação da API.",
        });
      }
    } else {
      res.status(400).json({
        status: false,
        mensagem:
          "Método não permitido ou Aluno no formato JSON não fornecido! Consulte a documentação da API.",
      });
    }
  }

  atualizar(req, res) {
    res.type("application/json");
    if (req.method === "PUT" && req.is("application/json")) {
      const dados = req.body;
      const codigo = dados.codigo;
      const rg = dados.rg;
      const cpf = dados.cpf;
      const nome_mae = dados.nome_mae;
      const dt_nasc = dados.dt_nasc;
      const escola = dados.escola;
      const serie = dados.serie;
      const periodo = dados.periodo;
      const nome = dados.nome;
      const telefone = dados.telefone;
      const email = dados.email;
      const endereco = dados.endereco;
      const bairro = dados.bairro;
      const cidade = dados.cidade;
      const cep = dados.cep;
      const uf = dados.uf;

      if (
        codigo &&
        rg &&
        cpf &&
        nome_mae &&
        dt_nasc &&
        escola &&
        serie &&
        periodo &&
        nome &&
        telefone &&
        email &&
        endereco &&
        bairro &&
        cidade &&
        cep &&
        uf
      ) {
        const aluno = new Aluno(
          codigo,
          rg,
          cpf,
          nome_mae,
          dt_nasc,
          escola,
          serie,
          periodo,
          nome,
          telefone,
          email,
          endereco,
          bairro,
          cidade,
          cep,
          uf
        );
        aluno
          .atualizar()
          .then(() => {
            res.status(200).json({
              status: true,
              mensagem: "Dados atualizados com sucesso!",
            });
          })
          .catch((erro) => {
            res.status(500).json({
              status: false,
              mensagem: erro.message,
            });
          });
      } else {
        res.status(400).json({
          status: false,
          mensagem: "Dados insuficientes! Consulte a documentação da API.",
        });
      }
    } else {
      res.status(400).json({
        status: false,
        mensagem:
          "Método não permitido ou Aluno no formato JSON não fornecido! Consulte a documentação da API.",
      });
    }
  }

  excluir(req, res) {
    const codigo = req.params.codigo;
    const aluno = new Aluno(codigo);

    aluno
      .excluir()
      .then(() => {
        res.status(200).json({
          status: true,
          mensagem: "Dados excluídos com sucesso!",
        });
      })
      .catch((erro) => {
        res.status(500).json({
          status: false,
          mensagem: erro.message,
        });
      });
  }

  consultar(req, res) {
    res.type("application/json");
    if (req.method === "GET") {
      const aluno = new Aluno();
      aluno
        .consultar()
        .then((alunos) => {
          res.status(200).json(alunos);
        })
        .catch((erro) => {
          res.status(500).json({
            status: false,
            mensagem: erro.message,
          });
        });
    } else {
      res.status(400).json({
        status: false,
        mensagem: "Método não permitido! Consulte a documentação da API.",
      });
    }
  }
}
