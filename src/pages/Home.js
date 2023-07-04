import React from 'react';
import med from '../assets/images.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Consultório</h1>
      <Link to="/pacientes">
        <button className="botao">Pacientes</button>
      </Link>
      <Link to="/medicos">
        <button className="botao">Médicos</button>
      </Link>
      <Link to="/consultas">
        <button className="botao">Consultas</button>
      </Link>
      <img src={med} className="imagem-centralizada" />
    </div>
  );
  
}

export default Home;