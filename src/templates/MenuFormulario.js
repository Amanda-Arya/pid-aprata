import { BotaoCancelar, BotaoExcluir, BotaoSalvar, BotaoVoltar } from "./Botoes";

export default function MenuAcao(props) {
  return (
    <>
      <div className="d-flex justify-content-between w-100 mb-3">
        <BotaoVoltar acaoBtnVoltar={props.acaoBtnVoltar} />
        <div className="d-flex">
          <BotaoSalvar />
          <BotaoCancelar />
          <BotaoExcluir />
        </div>
      </div>
    </>
  );
}
