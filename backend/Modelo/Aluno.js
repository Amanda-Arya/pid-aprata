import AlunoBD from "../Persistencia/AlunoBD.js";

export default class Aluno {
  #codigo;
  #rg;
  #cpf;
  #nome_mae;
  #dt_nasc;
  #escola;
  #serie;
  #periodo;
  #nome;
  #telefone;
  #email;
  #endereco;
  #bairro;
  #cidade;
  #cep;
  #uf;

  constructor(
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
  ) {
    this.#codigo = codigo;
    this.#rg = rg;
    this.#cpf = cpf;
    this.#nome_mae = nome_mae;
    this.#dt_nasc = dt_nasc;
    this.#escola = escola;
    this.#serie = serie;
    this.#periodo = periodo;
    this.#nome = nome;
    this.#telefone = telefone;
    this.#email = email;
    this.#endereco = endereco;
    this.#bairro = bairro;
    this.#cidade = cidade;
    this.#cep = cep;
    this.#uf = uf;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(novoCodigo) {
    this.#codigo = novoCodigo;
  }

  get rg() {
    return this.#rg;
  }

  set rg(novoRg) {
    this.#rg = novoRg;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(novoCpf) {
    this.#cpf = novoCpf;
  }

  get nome_mae() {
    return this.#nome_mae;
  }

  set nome_mae(novoNome_mae) {
    this.#nome_mae = novoNome_mae;
  }

  get dt_nasc() {
    return this.#dt_nasc;
  }

  set dt_nasc(novoDt_nasc) {
    this.#dt_nasc = novoDt_nasc;
  }

  get escola() {
    return this.#escola;
  }

  set escola(novoEscola) {
    this.#escola = novoEscola;
  }

  get serie() {
    return this.#serie;
  }

  set serie(novoSerie) {
    this.#serie = novoSerie;
  }

  get periodo() {
    return this.#periodo;
  }

  set periodo(novoPeriodo) {
    this.#periodo = novoPeriodo;
  }

  get nome() {
    return this.#nome;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }

  get telefone() {
    return this.#telefone;
  }

  set telefone(novoTelefone) {
    this.#telefone = novoTelefone;
  }

  get email() {
    return this.#email;
  }

  set email(novoEmail) {
    this.#email = novoEmail;
  }

  get endereco() {
    return this.#endereco;
  }

  set endereco(novoEndereco) {
    this.#endereco = novoEndereco;
  }

  get bairro() {
    return this.#bairro;
  }

  set bairro(novoBairro) {
    this.#bairro = novoBairro;
  }

  get cidade() {
    return this.#cidade;
  }

  set cidade(novoCidade) {
    this.#cidade = novoCidade;
  }

  get cep() {
    return this.#cep;
  }

  set cep(novoCep) {
    this.#cep = novoCep;
  }

  get uf() {
    return this.#uf;
  }

  set uf(novoUf) {
    this.#uf = novoUf;
  }

  toJSON() {
    return {
      codigo: this.#codigo,
      rg: this.#rg, 
      cpf: this.#cpf, 
      nome_mae: this.#nome_mae, 
      dt_nasc: this.#dt_nasc, 
      escola: this.#escola, 
      serie: this.#serie, 
      periodo: this.#periodo, 
      nome: this.#nome, 
      telefone: this.#telefone, 
      email: this.#email,
      endereco: this.#endereco, 
      bairro: this.#bairro, 
      cidade: this.#cidade, 
      cep: this.#cep,
      uf: this.#uf, 
    };
  }

  async gravar() {
    const alunoBD = new AlunoBD();
    await alunoBD.gravar(this);
  }

  async atualizar() {
    const alunoBD = new AlunoBD();
    await alunoBD.atualizar(this);
  }

  async excluir() {
    const alunoBD = new AlunoBD();
    await alunoBD.excluir(this);
  }

  async consultar() {
    const alunoBD = new AlunoBD();
    const alunos = await alunoBD.consultar();
    return alunos;
  }
}
