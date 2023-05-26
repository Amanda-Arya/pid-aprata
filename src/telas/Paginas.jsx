import Pagina from "../templates/Pagina";
import "./styles/Tela404.css";
import error from "./img/erro404.jpg";
import listaEmpresas from "../dados/empresas";
import FormEmpresa from "../formularios/FormEmpresa";
import TabelaCadastroEmpresas from "../tabelas/TabelaCadastroEmpresas";
import listaCursos from "../dados/cursos";
import FormCurso from "../formularios/FormCurso";
import TabelaCadastroCursos from "../tabelas/TabelaCadastroCursos";
import listaFuncionarios from "../dados/funcionarios";
import FormFuncionario from "../formularios/FormFuncionario";
import TabelaCadastroFuncionarios from "../tabelas/TabelaCadastroFuncionarios";
import listaAlunos from "../dados/alunos";
import TabelaRelatorioAprendizes from "../tabelas/TabelaRelatorioAprendizes";
import RelatorioAprendiz from "../formularios/FormRelatorioAprendiz";
import listaCargos from "../dados/cargos";
import FormCargo from "../formularios/FormCargo";
import TabelaCadastroCargos from "../tabelas/TabelaCadastroCargos";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TabelaCadastroTurmas from "../tabelas/TabelaCadastroTurmas";
import listaTurmas from "../dados/turmas";
import FormTurma from "../formularios/FormTurma";
import TabelaCadastroAlunos from "../tabelas/TabelaCadastroAlunos";
import FormAluno from "../formularios/FormAluno";

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
  )
}

function PaginaCadastroAluno(props) {
  const obj = { texto1: "Cadastro", texto2: "Aluno" };

  return (
    <Pagina obj={obj}>
      <TelaCadastroAlunos />
    </Pagina>
  )
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

// Define qual tela será exibida, tabela ou formulário
function TelaCadastroCursos(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [cursos, setCursos] = useState(listaCursos);

  function alternarTelas() {
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroCursos
        listaCursos={cursos}
        setCursos={setCursos}
        chamarCadastro={alternarTelas}
      />
    </>
  ) : (
    <FormCurso
      listaCursos={cursos}
      setCursos={setCursos}
      chamarTabela={alternarTelas}
    />
  );
}

function TelaCadastroTurmas(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [turmas, setTurmas] = useState(listaTurmas);

  function alternarTelas() {
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroTurmas
        listaTurmas={turmas}
        setTurmas={setTurmas}
        chamarCadastro={alternarTelas}
      />
    </>
  ) : (
    <FormTurma
      listaTurmas={turmas}
      setTurmas={setTurmas}
      chamarTabela={alternarTelas}
    />
  );
}

function TelaCadastroEmpresas(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [empresas, setEmpresas] = useState(listaEmpresas);

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
  const [funcionarios, setFuncionarios] = useState(listaFuncionarios);

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
  const [cargos, setCargos] = useState(listaCargos);

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
  const [alunos, setAlunos] = useState(listaAlunos);

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

function PaginaRelatorioAprendiz(props) {
  const { aprendizId } = useParams();
  const navigate = useNavigate();

  function alternarTelas() {
    navigate(-1);
  }

  return (
    <Pagina>
      {aprendizId ? (
        <RelatorioAprendiz
          dados={listaAlunos[aprendizId - 1]}
          chamarTabela={alternarTelas}
        />
      ) : (
        <TabelaRelatorioAprendizes alunos={listaAlunos} />
      )}
    </Pagina>
  );
}

export {
  PaginaCadastroCurso,
  Pagina404,
  PaginaCadastroEmpresa,
  PaginaInicial,
  PaginaRelatorioAprendiz,
  PaginaCadastroFuncionario,
  PaginaCadastroCargo,
  PaginaCadastroTurma,
  PaginaCadastroAluno
};
