import React, { useEffect, useState } from 'react';

function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [rut, setRut] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Llamada a la API para obtener la información de las empresas
    fetch('http://localhost:8000/companies/')
      .then(response => response.json())
      .then(data => setCompanies(data))
      .catch(error => console.log(error));
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

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, address, rut, phone })
    };

    fetch('http://localhost:8000/companies/', requestOptions)
      .then(response => response.json())
      .then(data => {
        setCompanies([...companies, data]);
        setName('');
        setAddress('');
        setRut('');
        setPhone('');
      })
      .catch(error => console.log(error));
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
          {companies.map(company => (
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