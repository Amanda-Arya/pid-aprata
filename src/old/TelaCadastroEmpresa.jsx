import FormEmpresa from "../formularios/FormEmpresa";
import Pagina from "../templates/Pagina";

export default function TelaCadastroEmpresa(props) {
    const obj = {texto1:'Cadastro', texto2:'Empresa'}

  return (
    <Pagina obj={obj}>
      <FormEmpresa />
    </Pagina>
  );
}
