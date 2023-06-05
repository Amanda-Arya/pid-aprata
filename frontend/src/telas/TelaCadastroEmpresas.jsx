import { useEffect, useState } from "react";
import FormEmpresa from "../formularios/FormEmpresa";
import TabelaCadastroEmpresas from "../tabelas/TabelaCadastroEmpresas";
import { urlBase } from "../utils/definicoes";
import axios from "axios";

export default function TelaCadastroEmpresas(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [onEdit, setOnEdit] = useState(null);
  const [empresas, setEmpresas] = useState([]);
  const [filtro, setFiltro] = useState("");

  const getEmpresas = async () => {
    try {
      const res = await axios.get(urlBase + "/empresas");
      setEmpresas(res.data.sort((a, b) => (a.codigo > b.codigo ? 1 : -1)));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getEmpresas();
  }, [setEmpresas]);

  return exibeTabela ? (
    <TabelaCadastroEmpresas
      empresas={empresas}
      setEmpresas={setEmpresas}
      setOnEdit={setOnEdit}
      filtro={filtro}
      aoMudarFiltro={setFiltro}
      setExibeTabela={setExibeTabela}
    />
  ) : (
    <FormEmpresa
      onEdit={onEdit}
      setOnEdit={setOnEdit}
      getEmpresas={getEmpresas}
      setExibeTabela={setExibeTabela}
    />
  );
}
