import React, { useEffect, useState } from "react";
import { getCompanies, createCompany } from "../services/companiesService";

function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rut, setRut] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getCompanies().then((data) => setCompanies(data));
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleRutChange(event) {
    setRut(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    const company = { name, address, rut, phone };
  
    if (name.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return;
    }
  
    if (address.length < 5) {
      alert("La dirección debe tener al menos 5 caracteres.");
      return;
    }
  
    if (rut.length < 8) {
      alert("El RUT debe tener al menos 8 caracteres.");
      return;
    }
  
    if (phone.length < 9) {
      alert("El teléfono debe tener al menos 9 caracteres.");
      return;
    }
  
    createCompany(company).then((data) => {
      setCompanies([...companies, data]);
      setName("");
      setAddress("");
      setRut("");
      setPhone("");
    });
  }

  return (
    <div>
      <h2>Mis Empresas</h2>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>RUT</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.address}</td>
              <td>{company.rut}</td>
              <td>{company.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Crear Empresa</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Dirección:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <label>
          RUT:
          <input type="text" value={rut} onChange={handleRutChange} />
        </label>
        <label>
          Teléfono:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
        <button type="submit">Crear Empresa</button>
      </form>
    </div>
  );
}

export default CompaniesPage;
