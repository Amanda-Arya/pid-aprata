import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  PaginaCadastroCurso,
  Pagina404,
  PaginaCadastroEmpresa,
  PaginaInicial,
  PaginaRelatorioAprendiz,
} from "./telas/Paginas";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PaginaInicial />} />
          <Route
            exact
            path="cadastro-curso"
            element={<PaginaCadastroCurso />}
          />
          <Route
            exact
            path="cadastro-empresa"
            element={<PaginaCadastroEmpresa />}
          />
          <Route
            exact
            path="relatorio-aprendiz"
            element={<PaginaRelatorioAprendiz />}
          >
            <Route
              path=":aprendizId"
              element={<PaginaRelatorioAprendiz />}
            ></Route>
          </Route>

          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
