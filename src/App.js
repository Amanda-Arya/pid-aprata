import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  PaginaCadastroCurso,
  Pagina404,
  PaginaCadastroEmpresa,
  PaginaInicial,
  PaginaRelatorioAprendiz
} from "./telas/Paginas";
// import RelatorioAprendiz from "./formularios/RelatorioAprendiz";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PaginaInicial />} />
          <Route exact path="/cadastroCurso" element={<PaginaCadastroCurso />} />
          <Route exact path="/cadastroEmpresa" element={<PaginaCadastroEmpresa />} />
          <Route exact path="/relatorioAprendiz" element={<PaginaRelatorioAprendiz />} />
          <Route path="/relatorioAprendiz/:codigo" element={<PaginaRelatorioAprendiz />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
