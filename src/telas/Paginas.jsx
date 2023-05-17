import Pagina from "../templates/Pagina";
import "./styles/Tela404.css";
import error from "./img/erro404.jpg";
import FormEmpresa from "../formularios/FormEmpresa";
import FormCurso from "../formularios/FormCurso";
import TabelaCadastroCursos from "../formularios/TabelaCadastroCursos";
import TabelaCadastroEmpresas from "../formularios/TabelaCadastroEmpresas";
import listaCursos from "../dados/cursos";
import { useState } from "react";
import listaEmpresas from "../dados/empresas";

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

function PaginaInicial(props) {
  return (
    <Pagina>
      {
        // Exibe apenas o menu
      }
    </Pagina>
  );
}

export { PaginaCadastroCurso, Pagina404, PaginaCadastroEmpresa, PaginaInicial };
