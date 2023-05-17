import TabelaCadastroProdutos from "../formularios/TabelaCadastroCursos";
import FormCurso from "../formularios/FormCurso";
import listaCursos from "../dados/cursos";

export default function TelaCadastroCursos(props) {
  const [exibeTabela, setExibeTabela] = useState(true);

  return exibeTabela ? (
    <TabelaCadastroProdutos cursos={listaCursos} />
  ) : (
    <FormCurso />
  );
}
