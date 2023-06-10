import { Router } from "express";
import TurmaCTRL from "../Controle/TurmaCtrl.js";

const rotaTurma = new Router();
const turmaCtrl = new TurmaCTRL();

// Definição de endpoints que serão processadas pela camada de controle
// para uma determinada turma
rotaTurma.post('/',turmaCtrl.gravar)
.put('/',turmaCtrl.atualizar)
.delete('/:codigo',turmaCtrl.excluir)
.get('/', turmaCtrl.consultar)

export default rotaTurma;