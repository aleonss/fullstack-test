const API_URL = "http://localhost:8000/employees/";

function getEmployeesByCompany(companyId) {
  return fetch(`${API_URL}?company=${companyId}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

function createEmployee(employee) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  };

  return fetch(API_URL, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export { getEmployeesByCompany, createEmployee };
