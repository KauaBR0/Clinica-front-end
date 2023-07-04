import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarPaciente from '../layout/NavbarPaciente'
import { Link, useParams } from "react-router-dom";

export default function ListarPaciente() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    LoadPacientes();
  }, []);

  const LoadPacientes = async () => {
    const result = await axios.get("http://localhost:8080/pacientes");
    setUsers(result.data.content);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/pacientes/${id}`);
    LoadPacientes();
  };

  return (
    <div>
      <NavbarPaciente />
      <div className="container">
        <div className="py-4">
          <h1 style={{ textAlign: "center" }}>Pacientes</h1>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">CPF</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.cpf}</td>
                  <td>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/editarPaciente/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
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