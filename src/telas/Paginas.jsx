import { useState } from "react";
import Pagina from "../templates/Pagina";
import error from "./img/erro404.jpg";
import FormAluno from "../formularios/FormAluno";
import FormCargo from "../formularios/FormCargo";
import FormCurso from "../formularios/FormCurso";
import FormEmpresa from "../formularios/FormEmpresa";
import FormFuncionario from "../formularios/FormFuncionario";
import FormTurma from "../formularios/FormTurma";
import TabelaCadastroAlunos from "../tabelas/TabelaCadastroAlunos";
import TabelaCadastroCargos from "../tabelas/TabelaCadastroCargos";
import TabelaCadastroCursos from "../tabelas/TabelaCadastroCursos";
import TabelaCadastroEmpresas from "../tabelas/TabelaCadastroEmpresas";
import TabelaCadastroFuncionarios from "../tabelas/TabelaCadastroFuncionarios";
import TabelaCadastroTurmas from "../tabelas/TabelaCadastroTurmas";
import {
  LISTA_ALUNOS,
  LISTA_CARGOS,
  LISTA_CURSOS,
  LISTA_EMPRESAS,
  LISTA_FUNCIONARIOS,
  LISTA_TURMAS,
} from "../dados/dados";
import "./styles/Tela404.css";

function PaginaCadastroCurso(props) {
  const obj = { texto1: "Cadastro", texto2: "Curso" };

  return (
    <Pagina obj={obj}>
      <TelaCadastroCursos />
    </Pagina>
  );
}

function PaginaCadastroEmpresa(props) {
  const obj = { texto1: "Cadastro", texto2: "Empresa" };
  return (
    <Pagina obj={obj}>
      <TelaCadastroEmpresas />
    </Pagina>
  );
}

function PaginaCadastroFuncionario(props) {
  const obj = { texto1: "Cadastro", texto2: "Funcionario" };
  return (
    <Pagina obj={obj}>
      <TelaCadastroFuncionarios />
    </Pagina>
  );
}

function PaginaCadastroCargo(props) {
  const obj = { texto1: "Cadastro", texto2: "Cargo" };

  return (
    <Pagina obj={obj}>
      <TelaCadastroCargos />
    </Pagina>
  );
}

function PaginaCadastroTurma(props) {
  const obj = { texto1: "Cadastro", texto2: "Turma" };

  return (
    <Pagina obj={obj}>
      <TelaCadastroTurmas />
    </Pagina>
  );
}

function PaginaCadastroAluno(props) {
  const obj = { texto1: "Cadastro", texto2: "Aluno" };

  return (
    <Pagina obj={obj}>
      <TelaCadastroAlunos />
    </Pagina>
  );
}

function Pagina404(props) {
  return (
    <Pagina>
      <div className="tela-erro">
        <img src={error} alt="Erro 404" />
        <h1>Página Não Encontrada</h1>
        <h2>A página que você está procurando não pôde ser encontrada</h2>
      </div>
    </Pagina>
  );
}

function TelaCadastroCursos(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [cursos, setCursos] = useState(LISTA_CURSOS);
  const [curso, setCurso] = useState({
    codigo: "",
    nome: "",
    sala: "",
    eixo: "",
    cargaHoras: "",
    professor: "",
    dtCriacao: "",
    dtDesativacao: "",
  });

  // Função é chamada a partir do componente tabela ou formulário, Se receber um código ao ser chamada,
  // será alterado o valor do estado exibeTabela para false e o formulário será mostrado.
  // Ao ser chamada sem argumento, pelo botão Voltar ou Novo, o componente volta ao seu estado inicial,
  // alternando entre as telas Tabela e Formulário

  function alternarTelas(codigo) {
    if (codigo) {
      setExibeTabela(false);
      return;
    } else {
      setCurso({});
    }

    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroCursos
        listaCursos={cursos}
        setCursos={setCursos}
        chamarTelaCadastro={alternarTelas}
        curso={curso}
        aoMudarCurso={setCurso}
      />
    </>
  ) : (
    <FormCurso
      listaCursos={cursos}
      setCursos={setCursos}
      chamarTabela={alternarTelas}
      curso={curso}
      aoMudarCurso={setCurso}
    />
  );
}

function TelaCadastroTurmas(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [turmas, setTurmas] = useState(LISTA_TURMAS);
  const [turma, setTurma] = useState({
    codigo: "",
    periodo: "",
    anoLetivo: "",
    cursos: "",
    dtInicio: "",
    dtFim: "",
    status: "",
    vagas: "",
    sala: "",
  });

  function alternarTelas(codigo) {
    if (codigo) {
      setExibeTabela(false);
      return;
    } else {
      setTurma({});
    }
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroTurmas
        listaTurmas={turmas}
        setTurmas={setTurmas}
        chamarCadastro={alternarTelas}
        turma={turma}
        aoMudarTurma={setTurma}
      />
    </>
  ) : (
    <FormTurma
      listaTurmas={turmas}
      setTurmas={setTurmas}
      chamarTabela={alternarTelas}
      turma={turma}
      aoMudarTurma={setTurma}
    />
  );
}

function TelaCadastroEmpresas(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [empresas, setEmpresas] = useState(LISTA_EMPRESAS);

  function alternarTelas() {
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroEmpresas
        listaEmpresas={empresas}
        setEmpresas={setEmpresas}
        chamarCadastro={alternarTelas}
      />
    </>
  ) : (
    <FormEmpresa
      chamarTabela={alternarTelas}
      listaEmpresas={empresas}
      setEmpresas={setEmpresas}
    />
  );
}

function TelaCadastroFuncionarios(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [funcionarios, setFuncionarios] = useState(LISTA_FUNCIONARIOS);

  function alternarTelas() {
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroFuncionarios
        listaFuncionarios={funcionarios}
        setFuncionarios={setFuncionarios}
        chamarCadastro={alternarTelas}
      />
    </>
  ) : (
    <FormFuncionario
      chamarTabela={alternarTelas}
      listaFuncionarios={funcionarios}
      setFuncionarios={setFuncionarios}
    />
  );
}

function TelaCadastroCargos(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [cargos, setCargos] = useState(LISTA_CARGOS);

  function alternarTelas() {
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroCargos
        listaCargos={cargos}
        setCargos={setCargos}
        chamarCadastro={alternarTelas}
      />
    </>
  ) : (
    <FormCargo
      listaCargos={cargos}
      setCargos={setCargos}
      chamarTabela={alternarTelas}
    />
  );
}

function TelaCadastroAlunos(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [alunos, setAlunos] = useState(LISTA_ALUNOS);

  function alternarTelas() {
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroAlunos
        listaAlunos={alunos}
        setAlunos={setAlunos}
        chamarCadastro={alternarTelas}
      />
    </>
  ) : (
    <FormAluno
      listaAlunos={alunos}
      setAlunos={setAlunos}
      chamarTabela={alternarTelas}
    />
  );
}

function PaginaInicial(props) {
  return (
    <Pagina>
      {
        // Exibe apenas o menu
      }
    </Pagina>
  );
}

export {
  PaginaCadastroCurso,
  Pagina404,
  PaginaCadastroEmpresa,
  PaginaInicial,
  PaginaCadastroFuncionario,
  PaginaCadastroCargo,
  PaginaCadastroTurma,
  PaginaCadastroAluno,
};
