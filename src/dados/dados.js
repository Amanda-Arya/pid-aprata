export const LISTA_ALUNOS = [
  {
    codigo: 1,
    cpf: "489.306.416-11",
    nome: "Eduardo Rossetti",
    dtNascimento: "2000-10-28",
    nomeMae: "Maria da Silva Rodrigues",
    rg: "04.201.154-3",
    endereco: "Rua José Pereira",
    bairro: "Vila Nova",
    cidade: "Rancharia",
    uf: "SP",
    tel: "(18)99645-4493",
    escola: "Etec Dep Francisco Franco",
    serie: "1º EM",
    periodo: "Matutino",
  },
  {
    codigo: 2,
    cpf: "221.111.498-22",
    nome: "Cristiano do Couto",
    dtNascimento: "1990-01-15",
    nomeMae: "Lúcia de Almeida",
    rg: "04.201.154-3",
    endereco: "Rua Kalinka Manoel",
    bairro: "Vila Bela",
    cidade: "Presidente Epitácio",
    uf: "SP",
    tel: "(11)99864-1634",
    escola: "IFSP",
    serie: "3º EM",
    periodo: "Matutino",
  },
  {
    codigo: 3,
    cpf: "457.575.579-33",
    nome: "Vinicius Alves",
    dtNascimento: "2001-01-10",
    nomeMae: "Solange Lima",
    rg: "04.201.154-3",
    endereco: "Rua Joelinton Roca",
    bairro: "Jardim Europa",
    cidade: "Presidente Prudente",
    uf: "SP",
    tel: "(11)99878-6351",
    escola: "E.E. Presidente Vargas",
    serie: "9º ano",
    periodo: "Matutino",
  },
  {
    codigo: 4,
    cpf: "789.545.456-44",
    nome: "José Rodrigues",
    dtNascimento: "2001-03-25",
    nomeMae: "Solange Santos",
    rg: "04.201.154-3",
    endereco: "Rua Lópes Cintra",
    bairro: "Vila Manuel",
    cidade: "Rancharia",
    uf: "SP",
    tel: "(11)99871-6547",
    escola: "E.E. Luís Dorini",
    serie: "8º ano",
    periodo: "Vespertino",
  },
];

export const LISTA_CARGOS = [
  {
    codigo: 1,
    nome: "Professores",
    descricao:
      "Cargo responsável pela atribuição de frequência dos alunos, além da docência que lhe é própria dentro da instituição",
  },
  {
    codigo: 2,
    nome: "Orientador",
    descricao:
      "Cargo responsável por registrar os relatórios dos aprendizes nas empresas",
  },
  {
    codigo: 3,
    nome: "Administrativo",
    descricao:
      "Cargo responsável pela matrícula do aluno e inserção nas turmas, e cadastros básicos",
  },
];

export const LISTA_CURSOS = [
  {
    codigo: 1,
    nome: "Aprendizagem em Recepção",
    sala: "Sala 1",
    eixo: "N/A",
    cargaHoras: "1 ano",
    professor: "Márcia Oreste",
    dtCriacao: "2016-01-01",
    dtDesativacao: "",
  },
  {
    codigo: 2,
    nome: "Informática",
    sala: "Sala 2",
    eixo: "N/A",
    cargaHoras: "1 ano",
    professor: "Caio Gharib",
    dtCriacao: "2015-08-01",
    dtDesativacao: "",
  },
  {
    codigo: 3,
    nome: "Comunicação e Linguagem",
    sala: "Sala 3",
    eixo: "N/A",
    cargaHoras: "1 ano",
    professor: "João Paulo Santos",
    dtCriacao: "2014-02-01",
    dtDesativacao: "",
  },
  {
    codigo: 4,
    nome: "Técnicas em Serviços de Supermercados",
    sala: "Sala 4",
    eixo: "N/A",
    cargaHoras: "1 ano",
    professor: "Márcia Oreste",
    dtCriacao: "2017-11-01",
    dtDesativacao: "",
  },
  {
    codigo: 5,
    nome: "Técnicas em Controle de Qualidade",
    sala: "Sala 5",
    eixo: "N/A",
    cargaHoras: "1 ano",
    professor: "João Paulo Santos",
    dtCriacao: "2014-02-01",
    dtDesativacao: "",
  },
];

export const LISTA_EMPRESAS = [
  {
    codigo: 1,
    cnpj: "55.986.549/0003-30",
    ie: "32.236.6544-5",
    razaoSocial: "Supermercado Dois Irmãos de Rancharida LTDA",
    logradouro: "Rua Felipe Camarão, 997",
    bairro: "Centro",
    municipio: "Rancharia",
    uf: "SP",
    cep: "19600-000",
    telefone: "(18)3229-1000",
    email: "dois.irmaos.nfe@gmail.com",
  },
  {
    codigo: 2,
    cnpj: "22.457.547/4546-22",
    ie: "21.230.6556-1",
    razaoSocial: "Universidade do Oeste Paulista",
    logradouro: "Rua José Bongiovani, 700",
    bairro: "Cidade Universitária",
    municipio: "Presidente Prudente",
    uf: "SP",
    cep: "19050-920",
    telefone: "(18)3230-1050",
    email: "faculdade@unoeste.edu.br",
  },
  {
    codigo: 3,
    cnpj: "33.124.347/4246-33",
    ie: "10.362.9841-9",
    razaoSocial: "Lojas Cem",
    logradouro: "Avenida Presidente Vargas, 400",
    bairro: "Cidade Universitária",
    municipio: "Presidente Epistácio",
    uf: "SP",
    cep: "16549-920",
    telefone: "(18)3229-1324",
    email: "lojascem.cobranca@yahoo.com.br",
  },
];

export const LISTA_FUNCIONARIOS = [
  {
    codigo: 1,
    cpf: "519.959.785-36",
    nome: "Márcio Santos Pauline",
    dtNascimento: "2023-01-15",
    dtAdmissao: "2023-01-15",
    dtDemissao: "2023-01-15",
    statusAtual: "Ativo",
    cargo: "Professor",
    endereco: "Rua José Pinheiro, 20",
    bairro: "Gertúlio Vargas",
    municipio: "Presidente Epitácio",
    uf: "SP",
    cep: "14001-000",
    telefone: "(18)99778-4563",
    email: "marciopinheiro@aprata.com",
    usuario: "marciopinheiro",
    senha: "pinheiro123",
  },
  {
    codigo: 2,
    cpf: "472.290.568-48",
    nome: "Caio Rodrigues de Souza",
    dtNascimento: "2023-01-15",
    dtAdmissao: "2023-01-15",
    dtDemissao: "2023-01-15",
    statusAtual: "Ativo",
    cargo: "Orientador",
    endereco: "Rua José da Silva",
    bairro: "Jardim Europa",
    municipio: "Presidente Prudente",
    uf: "SP",
    cep: "19654-000",
    telefone: "(18)98165-2314",
    email: "caiorodrigues@aprata.com",
    usuario: "caiorodrigues",
    senha: "caio123",
  },
  {
    codigo: 3,
    cpf: "986.295.986-62",
    nome: "Rogério Kaleb Lópes",
    dtNascimento: "2023-01-15",
    dtAdmissao: "2023-01-15",
    dtDemissao: "2023-01-15",
    statusAtual: "Inativo",
    cargo: "Administrativo",
    endereco: "Rua Napoleão Lópes, 410",
    bairro: "Jardim França",
    municipio: "Martinópolis",
    uf: "SP",
    cep: "15966-000",
    telefone: "(18)99645-4493",
    email: "rogeriokaleb@aprata.com",
    usuario: "rogeriokaleb",
    senha: "kaleb123",
  },
];

export const LISTA_TURMAS = [
  {
    codigo: 1,
    periodo: "Matutino",
    anoLetivo: "2022",
    cursos: "Comunicação e Linguagem e Informática",
    dtInicio: "2022-02-12",
    dtFim: "2023-11-25",
    status: "Ativo",
    vagas: "19",
  },
  {
    codigo: 2,
    periodo: "Matutino",
    anoLetivo: "2020",
    cursos: "Técnicas em Serviços de Supermercados",
    dtInicio: "2020-02-12",
    dtFim: "2020-11-25",
    status: "Inativo",
    vagas: "29",
  },
  {
    codigo: 3,
    periodo: "Vespertino",
    anoLetivo: "2023",
    cursos: "Técnicas em Escritório e Técnico de Segurança do Trabalho",
    dtInicio: "2023-02-12",
    dtFim: "2025-11-25",
    status: "Ativo",
    vagas: "9",
  },
];
