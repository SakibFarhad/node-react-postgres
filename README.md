# Node.js-React.js-PostgreSQL project

## Build backend container image

```bash
docker build -f Dockerfile.backend -t api-backend:0.0.1 .
```

## Build frontend container image

```bash
docker build -f Dockerfile.frontend -t client-frontend:0.0.1 .
```

## run docker compose

from `.env.example` please create a `.env` and also set the value of `POSTGRES_PASS`

```bash
docker compose up
```