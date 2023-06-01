import React, { useEffect, useState } from "react";
import {
  getEmployeesByCompany,
  createEmployee,
} from "../services/employeesService";

function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    rut: "",
    email: "",
  });

  useEffect(() => {
    // Llamada a la API para obtener la lista de empresas
    fetch("http://localhost:8000/companies/")
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Llamada a la API para obtener los empleados de la empresa seleccionada
    if (selectedCompany) {
      getEmployeesByCompany(selectedCompany)
        .then((data) => setEmployees(data))
        .catch((error) => console.log(error));
    }
  }, [selectedCompany]);

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the length of the employee parameters
    if (
      newEmployee.name.length < 1 ||
      newEmployee.name.length > 50 ||
      newEmployee.rut.length < 1 ||
      newEmployee.rut.length > 20 ||
      newEmployee.email.length < 1 ||
      newEmployee.email.length > 50
    ) {
      alert("Los parámetros del empleado no son válidos");
      return;
    }

    // Add the selectedCompany value to the newEmployee object
    const employeeWithCompany = {
      ...newEmployee,
      company: selectedCompany,
    };

    createEmployee(employeeWithCompany)
      .then((data) => {
        // Actualizar la lista de empleados con el nuevo empleado agregado
        setEmployees([...employees, data]);
        // Restablecer el formulario
        setNewEmployee({
          name: "",
          rut: "",
          email: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Mis Empleados</h1>
      <div>
        <label htmlFor="companySelect">Selecciona una empresa: </label>
        <select
          id="companySelect"
          value={selectedCompany}
          onChange={handleCompanyChange}
        >
          <option value="">-- Selecciona una empresa --</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCompany && (
        <div>
          <h2>Empleados de la empresa seleccionada:</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre completo</th>
                <th>RUT</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.rut}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Agregar un nuevo empleado:</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nameInput">Nombre completo:</label>
            <input
              type="text"
              id="nameInput"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
            />
            <label htmlFor="rutInput">RUT:</label>
            <input
              type="text"
              id="rutInput"
              name="rut"
              value={newEmployee.rut}
              onChange={handleInputChange}
            />
            <label htmlFor="emailInput">Email:</label>
            <input
              type="email"
              id="emailInput"
              name="email"
              value={newEmployee.email}
              onChange={handleInputChange}
            />
            <button type="submit">Agregar empleado</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EmployeesPage;
