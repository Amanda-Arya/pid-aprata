import Curso from "../Modelo/Curso.js";

export default class CursoCTRL {
  gravar(req, res) {
    res.type("application/json");
    if (req.method === "POST" && req.is("application/json")) {
      const dados = req.body;
      const nome = dados.nome;
      const sala = dados.sala;
      const eixo = dados.eixo;
      const carga_horas = dados.carga_horas;
      const dt_criacao = dados.dt_criacao;
      const dt_desativacao = dados?.dt_desativacao;

      if (nome && sala && eixo && carga_horas && dt_criacao) {
        const curso = new Curso(
          "",
          nome,
          sala,
          eixo,
          carga_horas,
          dt_criacao,
          dt_desativacao
        );

        curso
          .gravar()
          .then(() => {
            res.status(200).json({
              status: true,
              mensagem: "Dados gravados com sucesso.",
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
          "Método não permitido ou Curso no formato JSON não fornecido! Consulte a documentação da API.",
      });
    }
  }

  atualizar(req, res) {
    res.type("application/json");
    if (req.method === "PUT" && req.is("application/json")) {
      const dados = req.body;
      const codigo = dados.codigo;
      const nome = dados.nome;
      const sala = dados.sala;
      const eixo = dados.eixo;
      const carga_horas = dados.carga_horas;
      const dt_criacao = dados.dt_criacao;
      const dt_desativacao = dados?.dt_desativacao;

      if (codigo && nome && sala && eixo && carga_horas && dt_criacao) {
        const curso = new Curso(
          codigo,
          nome,
          sala,
          eixo,
          carga_horas,
          dt_criacao,
          dt_desativacao
        );

        curso
          .atualizar()
          .then(() => {
            res.status(200).json({
              status: true,
              mensagem: "Dados atualizados com sucesso.",
            });
          })
          .catch((erro) => {
            res.status(500).json(erro);
          });
      } else {
        res.status(400).json({
          status: false,
          mensagem: "Dados insuficientes! Consulte a documentação da API.",
        });
      }
    } else {
      // Código 400 = clientside error
      res.status(400).json({
        status: false,
        mensagem:
          "Método não permitido ou Empresa no formato JSON não fornecido! Consulte a documentação da API.",
      });
    }
  }

  excluir(req, res) {
    // res.type("application/json");
    const codigo = req.params.codigo;
    const curso = new Curso(codigo);

    curso
      .excluir()
      .then(() => {
        res.status(200).json({
          status: true,
          mensagem: "Dados excluídos com sucesso.",
        });
      })
      .catch((erro) => {
        res.status(500).json({
          status: false,
          mensagem: erro.message,
        });
      });
  }

  consultar(_, res) {
    const curso = new Curso();
    // Método assíncrono que recupera os clientes do banco de dados
    curso
      .consultar()
      .then((cursos) => {
        res.status(200).json(cursos);
      })
      .catch((erro) => {
        res.json(erro);
      });
  }
}
