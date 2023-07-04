import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddPaciente() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    endereco: {
      logradouro: "",
      bairro: "",
      cep: "",
      numero: "",
      complemento: "",
      cidade: "",
      uf: "",
    },
  });

  const { nome, email, telefone, cpf, endereco } = user;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("endereco.")) {
      const fieldName = name.split(".")[1];
      setUser({
        ...user,
        endereco: {
          ...endereco,
          [fieldName]: value,
        },
      });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/pacientes", user);
    navigate("/pacientes");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Registrar Paciente</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nome"
                name="nome"
                value={nome}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o e-mail"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">
                Telefone
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o telefone"
                name="telefone"
                value={telefone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">
                CPF
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o CPF"
                name="cpf"
                value={cpf}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco.logradouro" className="form-label">
                Logradouro
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o logradouro"
                name="endereco.logradouro"
                value={endereco.logradouro}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco.bairro" className="form-label">
                Bairro
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o bairro"
                name="endereco.bairro"
                value={endereco.bairro}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco.cep" className="form-label">
                CEP
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o CEP"
                name="endereco.cep"
                value={endereco.cep}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco.numero" className="form-label">
                Número
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o número"
                name="endereco.numero"
                value={endereco.numero}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco.complemento" className="form-label">
                Complemento
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o complemento"
                name="endereco.complemento"
                value={endereco.complemento}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco.cidade" className="form-label">
                Cidade
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite a cidade"
                name="endereco.cidade"
                value={endereco.cidade}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco.uf" className="form-label">
                UF
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite a UF"
                name="endereco.uf"
                value={endereco.uf}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/pacientes">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}