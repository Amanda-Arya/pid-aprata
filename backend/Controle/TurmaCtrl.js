import Turma from "../Modelo/Turma.js";

export default class TurmaCTRL {
  gravar(req, res) {
    res.type("application/json");
    if (req.method === "POST" && req.is("application/json")) {
      const dados = req.body;
      const periodo = dados.periodo;
      const ano_letivo = dados.ano_letivo;
      const dt_inicio = dados.dt_inicio;
      const dt_fim = dados?.dt_fim;
      const status = dados.status;
      const vagas = dados.vagas;
      const funcionario = dados.funcionario;
      const curso = dados.curso;

      if (
        periodo &&
        ano_letivo &&
        dt_inicio &&
        status &&
        vagas &&
        funcionario &&
        curso
      ) {
        const turma = new Turma(
          null, // codigo
          periodo,
          ano_letivo,
          dt_inicio,
          dt_fim,
          status,
          vagas,
          funcionario,
          curso
        );

        turma
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
          "Método não permitido ou Turma no formato JSON não fornecido! Consulte a documentação da API.",
      });
    }
  }

  atualizar(req, res) {
    res.type("application/json");
    if (req.method === "PUT" && req.is("application/json")) {
      const dados = req.body;
      const codigo = dados.codigo;
      const periodo = dados.periodo;
      const ano_letivo = dados.ano_letivo;
      const dt_inicio = dados.dt_inicio;
      const dt_fim = dados?.dt_fim;
      const status = dados.status;
      const vagas = dados.vagas;
      const funcionario = dados.funcionario;
      const curso = dados.curso;
      if (
        codigo &&
        periodo &&
        ano_letivo &&
        dt_inicio &&
        status &&
        vagas &&
        funcionario &&
        curso
      ) {
        const turma = new Turma(
          codigo,
          periodo,
          ano_letivo,
          dt_inicio,
          dt_fim,
          status,
          vagas,
          funcionario,
          curso
        );

        turma
          .atualizar()
          .then(() => {
            res.status(200).json({
              status: true,
              mensagem: "Dados atualizados com sucesso.",
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
          "Método não permitido ou Turma no formato JSON não fornecido! Consulte a documentação da API.",
      });
    }
  }

  excluir(req, res) {
    const codigo = req.params.codigo;
    const turma = new Turma(codigo);

    turma
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
      const turma = new Turma();
      turma
        .consultar()
        .then((turmas) => {
          res.status(200).json(turmas);
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
