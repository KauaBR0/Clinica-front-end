import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarConsulta from '../layout/NavbarConsulta'
import { Link } from "react-router-dom";

export default function ListarConsulta() {
  const [consultas, setConsultas] = useState([]);
  const [consultasState, setConsultasState] = useState([]);

  useEffect(() => {
    loadConsultas();
  }, []);

  const loadConsultas = async () => {
    const result = await axios.get("http://localhost:8080/consultas");
    setConsultas(result.data);
    setConsultasState(result.data.map((consulta) => ({ consulta, motivo: "" })));
  };

  const deleteConsulta = async (id) => {
    const consultaState = consultasState.find((state) => state.consulta.id === id);
    try {
      await axios.delete(`http://localhost:8080/consultas/${id}?motivo=${consultaState.motivo}`);
      loadConsultas();
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao cancelar a consulta.');
    }
  };

  const handleMotivoChange = (id, motivo) => {
    const newConsultasState = consultasState.map((state) =>
      state.consulta.id === id ? { ...state, motivo } : state
    );
    setConsultasState(newConsultasState);
  };

  return (
    <div>
      <NavbarConsulta />
      <div className="container">
        <div className="py-4">
          <h1 style={{ textAlign: "center" }}>Consultas</h1>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Médico</th>
                <th scope="col">Paciente</th>
                <th scope="col">Data e Hora</th>
                <th scope="col">Motivo do Cancelamento</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {consultasState.map(({ consulta, motivo }) => (
                <tr key={consulta.id}>
                  <td>{consulta.id}</td>
                  <td>{consulta.medico.nome}</td>
                  <td>{consulta.paciente.nome}</td>
                  <td>{consulta.dataHora}</td>
                  <td>
                    <select
                      className="form-control"
                      value={motivo}
                      onChange={(e) => handleMotivoChange(consulta.id, e.target.value)}
                    >
                      <option value="">Selecione o motivo</option>
                      <option value="PACIENTE_DESISTIU">Paciente desistiu</option>
                      <option value="MEDICO_CANCELOU">Médico cancelou</option>
                      <option value="OUTROS">Outros</option>
                    </select>
                  </td>
                  <td>
                    <button className="btn btn-danger mx-2" onClick={() => deleteConsulta(consulta.id)}>
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}