// Novo, Detalhes, Excluir
// Remover botão voltar
import { BotaoNovo, BotaoExcluir, BotaoDetalhes } from "./Botoes";

export default function MenuTabela(props) {

  return (
    <div className="d-flex mb-3">
      <BotaoNovo />
      <BotaoDetalhes />
      <BotaoExcluir />
    </div>
  );
}
