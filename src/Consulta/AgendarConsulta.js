import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AgendarConsulta() {
  const navigate = useNavigate();

  const [consulta, setConsulta] = useState({
    id: "",
    medico: {
      id: "",
    },
    paciente: {
      id: "",
    },
    dataHora: "",
  });

  const { id, medico, paciente, dataHora } = consulta;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("medico.")) {
      const fieldName = name.split(".")[1];
      setConsulta({
        ...consulta,
        medico: {
          ...consulta.medico,
          [fieldName]: value,
        },
      });
    } else if (name.startsWith("paciente.")) {
      const fieldName = name.split(".")[1];
      setConsulta({
        ...consulta,
        paciente: {
          ...consulta.paciente,
          [fieldName]: value,
        },
      });
    } else {
      setConsulta({ ...consulta, [name]: value });
    }
  };

  const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/consultas", consulta);
      navigate("/consultas");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Agendar Consulta</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="medico_id" className="form-label">
                ID do Médico
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite o ID do médico"
                name="medico.id"
                value={consulta.medico.id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="paciente_id" className="form-label">
                ID do Paciente
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite o ID do paciente"
                name="paciente.id"
                value={consulta.paciente.id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dataHora" className="form-label">
                Data e Hora
              </label>
              <input
                type={"datetime-local"}
                className="form-control"
                placeholder="Digite a data e hora"
                name="dataHora"
                value={consulta.dataHora}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Agendar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/consultas">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}