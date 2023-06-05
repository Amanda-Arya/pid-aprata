import { Router } from "express";
import EmpresaCTRL from "../Controle/EmpresaCtrl.js";

const rotaEmpresa = new Router();
const empresaCtrl = new EmpresaCTRL();

// Definição de endpoints que serão processadas pela camada de controle
// para uma determinada Empresa
rotaEmpresa
  .post("/", empresaCtrl.gravar)
  .put("/", empresaCtrl.atualizar)
  .delete("/:codigo", empresaCtrl.excluir)
  .get("/", empresaCtrl.consultar);

export default rotaEmpresa;
