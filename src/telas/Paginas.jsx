import Pagina from "../templates/Pagina";
import "./styles/Tela404.css";
import error from "./img/erro404.jpg";
import FormEmpresa from "../formularios/FormEmpresa";
import FormCurso from "../formularios/FormCurso";
import FormFuncionario from "../formularios/FormFuncionario";
import TabelaCadastroCursos from "../formularios/TabelaCadastroCursos";
import TabelaCadastroEmpresas from "../formularios/TabelaCadastroEmpresas";
import TabelaCadastroFuncionarios from "../formularios/TabelaCadastroFuncionarios";
import listaCursos from "../dados/cursos";
import { useState } from "react";
import listaEmpresas from "../dados/empresas";
import listaAlunos from "../dados/alunos";
import listaFuncionarios from "../dados/funcionarios";
import TabelaRelatorioAprendizes from "../formularios/TabelaRelatorioAprendizes";
import RelatorioAprendiz from "../formularios/RelatorioAprendiz";
import { useNavigate, useParams } from "react-router-dom";
import TabelaCadastroCargos from "../formularios/TabelaCadastroCargos";
import listaCargos from "../dados/cargos";
import FormCargo from "../formularios/FormCargo";

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

// Define qual tela será exibida, tabela de cursos ou formulário de cursos
function TelaCadastroCursos(props) {
  const [exibeTabela, setExibeTabela] = useState(true);

  function alternarTelas() {
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroCursos
        cursos={listaCursos}
        chamarCadastro={alternarTelas}
      />
    </>
  ) : (
    <FormCurso chamarTabela={alternarTelas} />
  );
}

// Define qual tela será exibida, tabela de cursos ou formulário de cursos
function TelaCadastroEmpresas(props) {
  const [exibeTabela, setExibeTabela] = useState(true);

  function alternarTelas() {
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroEmpresas
        empresas={listaEmpresas}
        chamarCadastro={alternarTelas}
      />
    </>
  ) : (
    <FormEmpresa chamarTabela={alternarTelas} />
  );
}

function TelaCadastroFuncionarios(props) {
  const [exibeTabela, setExibeTabela] = useState(true);

  function alternarTelas() {
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroFuncionarios
        funcionarios={listaFuncionarios}
        chamarCadastro={alternarTelas}
      />
    </>
  ) : (
    <FormFuncionario chamarTabela={alternarTelas} />
  );
}

function TelaCadastroCargos(props) {
  const [exibeTabela, setExibeTabela] = useState(true);

  function alternarTelas() {
    setExibeTabela(!exibeTabela);
  }

  return exibeTabela ? (
    <>
      <TabelaCadastroCargos
        cargos={listaCargos}
        chamarCadastro={alternarTelas}
      />
    </>
  ) : (
    <FormCargo chamarTabela={alternarTelas} />
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
        <RelatorioAprendiz dados={listaAlunos[aprendizId-1]} chamarTabela={alternarTelas}/>
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
  PaginaCadastroCargo
};
