import { Router } from "express";
import CursoCTRL from "../Controle/CursoCtrl.js";
const rotaCurso = new Router();
const cursoCtrl = new CursoCTRL();

// Definição de endpoints que serão processadas pela camada de controle
// para uma determinada Empresa
rotaCurso
  .post("/", cursoCtrl.gravar)
  .put("/", cursoCtrl.atualizar)
  .delete("/:codigo", cursoCtrl.excluir)
  .get("/", cursoCtrl.consultar);
// .get("/:termo", cursoCtrl.consultarTermo);

export default rotaCurso;
