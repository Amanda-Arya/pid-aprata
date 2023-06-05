import { useEffect, useState } from "react";
import FormFuncionario from "../formularios/FormFuncionario.jsx";
import TabelaCadastroFuncionarios from "../tabelas/TabelaCadastroFuncionarios.jsx";
import { urlBase } from "../utils/definicoes";
import axios from "axios";
import { toast } from "react-toastify";

export default function TelaCadastroFuncionarios(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [onEdit, setOnEdit] = useState(null);
  const [funcionarios, setFuncionarios] = useState([]);
  const [filtro, setFiltro] = useState("");

  const getFuncionarios = async () => {
    try {
      const res = await axios.get(urlBase + "/funcionarios");
      setFuncionarios(res.data.sort((a, b) => (a.codigo > b.codigo ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getFuncionarios();
  }, [setFuncionarios]);

  return exibeTabela ? (
    <TabelaCadastroFuncionarios
      funcionarios={funcionarios}
      setFuncionarios={setFuncionarios}
      setOnEdit={setOnEdit}
      filtro={filtro}
      aoMudarFiltro={setFiltro}
      setExibeTabela={setExibeTabela}
    />
  ) : (
    <FormFuncionario
      onEdit={onEdit}
      setOnEdit={setOnEdit}
      getFuncionarios={getFuncionarios}
      setExibeTabela={setExibeTabela}
    />
  );
}
