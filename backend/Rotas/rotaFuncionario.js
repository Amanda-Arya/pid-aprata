import { Router } from "express";
import FuncionarioCTRL from "../Controle/FuncionarioCtrl.js";

const rotaFuncionario = new Router();
const funcionarioCtrl = new FuncionarioCTRL();
//Definição de endpoints que serão processadas pela camada de controle para um determinado funcionário

rotaFuncionario.post('/', funcionarioCtrl.gravar)
.put('/', funcionarioCtrl.atualizar)
.delete('/:codigo', funcionarioCtrl.excluir)
.get('/', funcionarioCtrl.consultar)

export default rotaFuncionario;