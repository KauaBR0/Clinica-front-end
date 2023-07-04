import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarMedico from '../layout/NavbarMedico'
import { Link, useParams } from "react-router-dom";

export default function ListarMedico() {
  const [medicos, setMedicos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadMedicos();
  }, []);

  const loadMedicos = async () => {
    const result = await axios.get("http://localhost:8080/medicos");
    setMedicos(result.data.content);
  };

  const deleteMedico = async (id) => {
    await axios.delete(`http://localhost:8080/medicos/${id}`);
    loadMedicos();
  };

  return (
    <div>
      <NavbarMedico />
      <div className="container">
        <div className="py-4">
          <h1 style={{ textAlign: "center" }}>Médicos</h1>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">CRM</th>
                <th scope="col">Especialidade</th>
                <th scope="col">Ativo</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {medicos.map((medico) => (
                <tr key={medico.id}>
                  <td>{medico.id}</td>
                  <td>{medico.nome}</td>
                  <td>{medico.email}</td>
                  <td>{medico.crm}</td>
                  <td>{medico.especialidade}</td>
                  <td>{medico.ativo ? "Sim" : "Não"}</td>
                  <td>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/editarMedico/${medico.id}`}
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteMedico(medico.id)}
                    >
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