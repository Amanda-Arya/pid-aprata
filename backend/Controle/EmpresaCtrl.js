import Empresa from "../Modelo/Empresa.js";

export default class EmpresaCTRL {
  // Método responsável por gravar os dados de uma Empresa
  // das requisições (POST) vindas da internet por meio do protocolo HTTP
  // Recupera os dados de uma Empresa (JSON) vindos da requisição
  gravar(req, res) {
    res.type("application/json");
    if (req.method === "POST" && req.is("application/json")) {
      const dados = req.body;
      const cnpj = dados.cnpj;
      const ie = dados.ie;
      const razao_social = dados.razao_social;
      const telefone = dados.telefone;
      const email = dados.email;
      const proprietario = dados.proprietario;
      const endereco = dados.endereco;
      const bairro = dados.bairro;
      const cidade = dados.cidade;
      const cep = dados.cep;
      const uf = dados.uf;

      if (
        cnpj &&
        ie &&
        razao_social &&
        telefone &&
        email &&
        proprietario &&
        endereco &&
        bairro &&
        cidade &&
        cep &&
        uf
      ) {
        // Instância do objeto empresa utilizando os dados recebidos pela aplicação
        const empresa = new Empresa(
          null,
          cnpj,
          ie,
          razao_social,
          telefone,
          email,
          proprietario,
          endereco,
          bairro,
          cidade,
          cep,
          uf
        );

        // Método assíncrono gravar que instancia a camada de persistência e
        // insere uma tupla na tabela empresa do banco de dados
        empresa
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
      // Código 400 = clientside error
      res.status(400).json({
        status: false,
        mensagem:
          "Método não permitido ou Empresa no formato JSON não fornecido! Consulte a documentação da API.",
      });
    }
  }

  // Requisição HTTP do tipo PUT
  atualizar(req, res) {
    res.type("application/json");
    if (req.method === "PUT" && req.is("application/json")) {
      const dados = req.body;
      const codigo = dados.codigo;
      const cnpj = dados.cnpj;
      const ie = dados.ie;
      const razao_social = dados.razao_social;
      const telefone = dados.telefone;
      const email = dados.email;
      const proprietario = dados.proprietario;
      const endereco = dados.endereco;
      const bairro = dados.bairro;
      const cidade = dados.cidade;
      const cep = dados.cep;
      const uf = dados.uf;

      if (
        codigo &&
        cnpj &&
        ie &&
        razao_social &&
        telefone &&
        email &&
        proprietario &&
        endereco &&
        bairro &&
        cidade &&
        cep &&
        uf
      ) {
        // Instância do objeto empresa utilizando os dados recebidos pela aplicação
        const empresa = new Empresa(
          codigo,
          cnpj,
          ie,
          razao_social,
          telefone,
          email,
          proprietario,
          endereco,
          bairro,
          cidade,
          cep,
          uf
        );

        // Método assíncrono atualizar que instancia a camada de persistência e
        // atualiza um ou mais dados na tabela empresa do banco de dados
        empresa
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
      // Código 400 = clientside error
      res.status(400).json({
        status: false,
        mensagem:
          "Método não permitido ou Empresa no formato JSON não fornecido! Consulte a documentação da API.",
      });
    }
  }

  // Requisição HTTP do tipo DELETE
  excluir(req, res) {
    const codigo = req.params.codigo;
    const empresa = new Empresa(codigo);

    empresa
      .excluir()
      .then(() => {
        res.status(200).json({
          status: true,
          mensagem: "Dados excluídos com sucesso.",
        });
      })
      .catch((erro) => {
        res.status(500).json(erro);
      });
  }
  // Requisição HTTP do tipo GET
  consultar(req, res) {
    res.type("application/json");
    if (req.method === "GET") {
      const empresa = new Empresa();
      // Método assíncrono que recupera os clientes do banco de dados
      empresa
        .consultar()
        .then((empresas) => {
          res.status(200).json(empresas);
        })
        .catch((erro) => {
          res.status(500).json({
            status: false,
            mensagem: erro.message,
          });
        });
    } else {
      // Código 400 = clientside error
      res.status(400).json({
        status: false,
        mensagem: "Método não permitido! Consulte a documentação da API.",
      });
    }
  }
}
