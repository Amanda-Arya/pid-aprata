import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  PaginaCadastroCurso,
  Pagina404,
  PaginaCadastroEmpresa,
  PaginaInicial
} from "./telas/Paginas";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/cadastroCurso" element={<PaginaCadastroCurso />} />
          <Route path="/cadastroEmpresa" element={<PaginaCadastroEmpresa />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
