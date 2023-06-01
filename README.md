# Tu Empleado Perfecto (Prueba tecnica para FullStack Developer)

Containerizing Postgres, Django and React with Docker

- `api/`: Django
- `app/`: React

## Requirements

- Git
  - `git 2.35`
- Docker
  - `docker 20.10`
  - `docker-compose 1.29`

## How to use

### 1. Build

```bash
docker-compose build
```

### 2. Run

```bash
docker-compose up
```


## Endpoints

- `GET /companies/`: List all companies
- `POST /companies/`: Create a new company
- `GET /companies/{pk}/employees/`: List all employees of a specific company by primary key

- `POST /employees/`: Create a new employee


## Available sites:

- React App: http://localhost:3000/
- Django admin: http://localhost:8000/admin/
  - user: `admin`
  - password: `tuempleadoperfecto`

## Helpfull commands

### Attach to API (Django) container

```bash
docker exec -it api_dev sh
pipenv shell

python manage.py makemigrations
python manage.py migrate
python manage.py shell
```

### Attach to App (React) container

```bash
docker exec -it app_dev sh

yarn start
yarn build

# Other commands
yarn add react-router-dom
yarn add @mui/material @emotion/react @emotion/styled

yarn add @mui/material @mui/styled-engine-sc styled-components
yarn add @fontsource/roboto
yarn add @mui/icons-material
yarn add @mui/styles

yarn upgrade

# npm install @material-ui/core --save
# npm install
# npm update
# npm install --save react-router-dom
```

### Rebuild containers

```bash
docker-compose down
docker volume prune
docker-compose up --build
```
