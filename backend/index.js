import express from "express";
import rotaEmpresa from "./Rotas/rotaEmpresa.js";
import rotaCurso from "./Rotas/rotaCurso.js";
import rotaFuncionario from "./Rotas/rotaFuncionario.js";
import rotaCargo from "./Rotas/rotaCargo.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Configurar a aplicação para aceitar objetos aninhados
app.use(express.urlencoded({ extended: false }));

app.use("/empresas", rotaEmpresa);
app.use("/cursos", rotaCurso);
app.use("/funcionarios", rotaFuncionario);
app.use("/cargos", rotaCargo);
//app.use("/alunos", rotaAluno);
//app.use("/turmas", rotaTurma);

app.listen(4000, () => {
  console.log("Server listening on http://localhost:4000");
});
