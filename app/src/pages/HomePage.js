import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleCompaniesClick = () => {
    navigate("/companies");
  };

  const handleEmployeesClick = () => {
    navigate("/employees");
  };
  return (
    <div>
      <h2>Home</h2>
      <div>
        <button onClick={handleCompaniesClick}>Ir a mis Empresas</button>
        <button onClick={handleEmployeesClick}>Ir a mis empleados</button>
      </div>
    </div>
  );
}

export default HomePage;
