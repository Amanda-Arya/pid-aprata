import CursoBD from "../Persistencia/CursoBD.js";

export default class Curso {
  #codigo;
  #nome;
  #sala;
  #eixo;
  #carga_horas;
  #dt_criacao;
  #dt_desativacao;

  constructor(
    codigo,
    nome,
    sala,
    eixo,
    carga_horas,
    dt_criacao,
    dt_desativacao
  ) {
    this.#codigo = codigo;
    this.#nome = nome;
    this.#sala = sala;
    this.#eixo = eixo;
    this.#carga_horas = carga_horas;
    this.#dt_criacao = dt_criacao;
    this.#dt_desativacao = dt_desativacao;
  }

  get codigo() {
    return this.#codigo;
  }

  get nome() {
    return this.#nome;
  }
  set nome(novoNome) {
    this.#nome = novoNome;
  }

  get sala() {
    return this.#sala;
  }
  set sala(novoSala) {
    this.#sala = novoSala;
  }

  get eixo() {
    return this.#eixo;
  }
  set eixo(novoEixo) {
    this.#eixo = novoEixo;
  }

  get carga_horas() {
    return this.#carga_horas;
  }
  set carga_horas(novocarga_horas) {
    this.#carga_horas = novocarga_horas;
  }

  get dt_criacao() {
    return this.#dt_criacao;
  }
  set dt_criacao(novodt_criacao) {
    this.#dt_criacao = novodt_criacao;
  }

  get dt_desativacao() {
    return this.#dt_desativacao;
  }
  set dt_desativacao(novodt_desativacao) {
    this.#dt_desativacao = novodt_desativacao;
  }

  toJSON() {
    return {
      codigo: this.#codigo,
      nome: this.#nome,
      sala: this.#sala,
      eixo: this.#eixo,
      carga_horas: this.#carga_horas,
      dt_criacao: this.#dt_criacao,
      dt_desativacao: this.#dt_desativacao,
    };
  }

  async gravar() {
    const cursoBD = new CursoBD();
    await cursoBD.gravar(this);
  }

  async atualizar() {
    const cursoBD = new CursoBD();
    await cursoBD.atualizar(this);
  }

  async excluir() {
    const cursoBD = new CursoBD();
    await cursoBD.excluir(this);
  }

  async consultar() {
    const cursoBD = new CursoBD();
    const cursos = await cursoBD.consultar();
    return cursos;
  }
}
