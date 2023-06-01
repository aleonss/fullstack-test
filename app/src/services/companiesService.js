const API_URL = "http://localhost:8000/companies/";

function getCompanies() {
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

function createCompany(company) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(company),
  };

  return fetch(API_URL, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export { getCompanies, createCompany };
