import { useState, useEffect } from "react";
import FormCurso from "../formularios/FormCurso";
import TabelaCadastroCursos from "../tabelas/TabelaCadastroCursos";
import { urlBase } from "../utils/definicoes";
import axios from "axios";
import { toast } from "react-toastify";

export default function TelaCadastroCursos(props) {
  const [exibeTabela, setExibeTabela] = useState(true);
  const [onEdit, setOnEdit] = useState(null);
  const [cursos, setCursos] = useState([]);
  const [filtro, setFiltro] = useState("");

  const getCursos = async () => {
    try {
      const res = await axios.get(urlBase + "/cursos");
      setCursos(res.data.sort((a, b) => (a.codigo > b.codigo ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getCursos();
  }, [setCursos]);

  return exibeTabela ? (
    <TabelaCadastroCursos
      cursos={cursos}
      setCursos={setCursos}
      setOnEdit={setOnEdit}
      filtro={filtro}
      aoMudarFiltro={setFiltro}
      setExibeTabela={setExibeTabela}
    />
  ) : (
    <FormCurso
      onEdit={onEdit}
      setOnEdit={setOnEdit}
      getCursos={getCursos}
      setExibeTabela={setExibeTabela}
    />
  );
}
