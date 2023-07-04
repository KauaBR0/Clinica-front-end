import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/NavbarMedico";
import ListarMedico from "./Medico/ListarMedico";
import EditarMedico from "./Medico/EditarMedico";
import AdicionarMedico from "./Medico/AddMedico";
import ListarPaciente from "./Paciente/ListarPaciente";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPaciente from "./Paciente/AddPaciente";
import EditarPaciente from "./Paciente/EditarPaciente";
import AgendarConsulta from "./Consulta/AgendarConsulta";
import ListarConsulta from "./Consulta/ListarConsulta";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/medicos" element={<ListarMedico />} />
          <Route exact path="/consultas" element={<ListarConsulta />} />
          <Route exact path="/agendarConsulta" element={<AgendarConsulta />} />
          <Route exact path="/AdicionarMedico" element={<AdicionarMedico />} />
          <Route exact path="/editarMedico/:id" element={<EditarMedico />} />
          <Route exact path="/pacientes" element={<ListarPaciente />} />
          <Route exact path="/adicionarPaciente" element={<AddPaciente />} />
          <Route exact path="/editarPaciente/:id" element={<EditarPaciente />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

