import EmpresaBD from "../Persistencia/EmpresaBD.js";

export default class Empresa {
  #codigo;
  #cnpj;
  #ie;
  #razao_social;
  #telefone;
  #email;
  #proprietario;
  #endereco;
  #bairro;
  #cidade;
  #cep;
  #uf;

  constructor(
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
  ) {
    this.#codigo = codigo;
    this.#cnpj = cnpj;
    this.#ie = ie;
    this.#razao_social = razao_social;
    this.#telefone = telefone;
    this.#email = email;
    this.#proprietario = proprietario;
    this.#endereco = endereco;
    this.#bairro = bairro;
    this.#cidade = cidade;
    this.#cep = cep;
    this.#uf = uf;
  }

  get codigo() {
    return this.#codigo;
  }

  get cnpj() {
    return this.#cnpj;
  }
  set cnpj(novoCnpj) {
    this.#cnpj = novoCnpj;
  }

  get ie() {
    return this.#ie;
  }
  set ie(novoIe) {
    this.#ie = novoIe;
  }

  get razao_social() {
    return this.#razao_social;
  }
  set razao_social(novoRazao_social) {
    this.#razao_social = novoRazao_social;
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

  get proprietario() {
    return this.#proprietario;
  }
  set proprietario(novoProprietario) {
    this.#proprietario = novoProprietario;
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
      cnpj: this.#cnpj,
      ie: this.#ie,
      razao_social: this.#razao_social,
      telefone: this.#telefone,
      email: this.#email,
      proprietario: this.#proprietario,
      endereco: this.#endereco,
      bairro: this.#bairro,
      cidade: this.#cidade,
      cep: this.#cep,
      uf: this.#uf,
    };
  }

  async gravar() {
    const empresaBD = new EmpresaBD();
    await empresaBD.gravar(this);
  }

  async atualizar() {
    const empresaBD = new EmpresaBD();
    await empresaBD.atualizar(this);
  }

  async excluir() {
    const empresaBD = new EmpresaBD();
    await empresaBD.excluir(this);
  }

  async consultar() {
    const empresaBD = new EmpresaBD();
    const empresas = await empresaBD.consultar();
    return empresas;
  }

  // async consultarTermo(termo) {
  //   const empresaBD = new EmpresaBD();
  //   const empresas = await empresaBD.consultarTermo(termo);
  //   return empresas;
  // }
}
