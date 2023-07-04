import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditarMedico() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [medico, setMedico] = useState({
    id: "",
    nome: "",
    email: "",
    telefone: "",
    crm: "",
    especialidade: "",
    endereco: {
      logradouro: "",
      bairro: "",
      cep: "",
      numero: "",
      complemento: "",
      cidade: "",
      uf: "",
    },
    ativo: true,
  });

  const { nome, email, telefone, crm, especialidade, endereco } = medico;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("endereco.")) {
      const fieldName = name.split(".")[1];
      setMedico({
        ...medico,
        endereco: {
          ...endereco,
          [fieldName]: value,
        },
      });
    } else {
      setMedico({ ...medico, [name]: name === "ativo" ? e.target.checked : value });
    }
  };

  useEffect(() => {
    loadMedico();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/medicos/${id}`, medico);
    navigate("/medicos");
  };

  const loadMedico = async () => {
    const result = await axios.get(`http://localhost:8080/medicos/${id}`);
    setMedico(result.data.content);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Medico</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                ID
                </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite o ID"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type={"text"}
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
                type={"text"}
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
                type={"text"}
                className="form-control"
                placeholder="Digite o telefone"
                name="telefone"
                value={telefone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="crm" className="form-label">
                crm
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite o CRM"
                name="crm"
                value={crm}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="especialidade" className="form-label">
              especialidade
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite a especialidade"
                name="especialidade"
                value={especialidade}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endereco.logradouro" className="form-label">
                Logradouro
              </label>
              <input
                type={"text"}
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
                type={"text"}
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
                type={"text"}
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
                type={"text"}
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
                type={"text"}
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
                type={"text"}
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
                type={"text"}
                className="form-control"
                placeholder="Digite o UF"
                name="endereco.uf"
                value={endereco.uf}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Salvar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/medicos">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}