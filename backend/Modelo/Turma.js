import TurmaBD from "../Persistencia/TurmaBD.js";

export default class Turma {
  #codigo;
  #periodo;
  #ano_letivo;
  #dt_inicio;
  #dt_fim;
  #status;
  #vagas;
  #funcionario; 
  #curso; 

  constructor(
    codigo,
    periodo,
    ano_letivo,
    dt_inicio,
    dt_fim,
    status,
    vagas,
    funcionario,
    curso
  ) {
    this.#codigo = codigo;
    this.#periodo = periodo;
    this.#ano_letivo = ano_letivo;
    this.#dt_inicio = dt_inicio;
    this.#dt_fim = dt_fim;
    this.#status = status;
    this.#vagas = vagas;
    this.#funcionario = funcionario;
    this.#curso = curso;
  }

  get codigo() {
    return this.#codigo;
  }

  get periodo() {
    return this.#periodo;
  }
  set periodo(novoPeriodo) {
    this.#periodo = novoPeriodo;
  }

  get ano_letivo() {
    return this.#ano_letivo;
  }
  set ano_letivo(novoAnoLetivo) {
    this.#ano_letivo = novoAnoLetivo;
  }

  get dt_inicio() {
    return this.#dt_inicio;
  }

  set dt_inicio(novoDtInicio) {
    this.#dt_inicio = novoDtInicio;
  }

  get dt_fim() {
    return this.#dt_fim;
  }

  set dt_fim(novoDtFim) {
    this.#dt_fim = novoDtFim;
  }

  get status() {
    return this.#status;
  }

  set status(novoStatus) {
    this.#status = novoStatus;
  }

  get vagas() {
    return this.#vagas;
  }

  set vagas(novasVagas) {
    this.#vagas = novasVagas;
  }

  get funcionario() {
    return this.#funcionario;
  }

  set funcionario(novoFuncionario) {
    this.#funcionario = novoFuncionario;
  }

  get curso() {
    return this.#curso;
  }

  set curso(novoCurso) {
    this.#curso = novoCurso;
  }

  toJSON() {
    return {
      codigo: this.#codigo,
      periodo: this.#periodo,
      ano_letivo: this.#ano_letivo,
      dt_inicio: this.#dt_inicio,
      dt_fim: this.#dt_fim,
      status: this.#status,
      vagas: this.#vagas,
      funcionario: this.#funcionario,
      curso: this.#curso,
    };
  }

  async gravar() {
    const turmaBD = new TurmaBD();
    await turmaBD.gravar(this);
  }

  async atualizar() {
    const turmaBD = new TurmaBD();
    await turmaBD.atualizar(this);
  }

  async excluir() {
    const turmaBD = new TurmaBD();
    await turmaBD.excluir(this);
  }

  async consultar() {
    const turmaBD = new TurmaBD();
    const turmas = await turmaBD.consultar();
    return turmas;
  }
}
