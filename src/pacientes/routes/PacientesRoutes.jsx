import { Navigate, Route, Routes } from "react-router-dom";
import { PacienteHistorial, PacientesPage } from "../pages";
import { ConsultaPage } from "../pages/Consulta";

export const PacientesRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/pacientes" />} />
      <Route path="/" element={<PacientesPage />} />
      <Route path="/:id_pac/historial" element={<PacienteHistorial />} />
      <Route path="/:id_pac/historial/:id_cons" element={<ConsultaPage />} />
    </Routes>
  );
};
