// Novo, Detalhes, Excluir
// Remover botão voltar
import { BotaoNovo, BotaoExcluir, BotaoDetalhes, BotaoEditar } from "./Botoes";

export default function MenuTabela(props) {

  return (
    <div className="d-flex mb-3">
      <BotaoNovo acaoBtnNovo={props.acaoBtnNovo} />
      <BotaoDetalhes />
      <BotaoEditar />
      <BotaoExcluir />
    </div>
  );
}
