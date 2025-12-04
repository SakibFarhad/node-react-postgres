# Node.js-React.js-PostgreSQL project

I was used minikube on WSL with Docker driver

```bash
minikube start
```

deploy application:

```bash
kubectl apply -f namespace-dev.yml
kubectl apply -f backend-deployment.yml
kubectl apply -f backend-service.yml
kubectl apply -f frontend-deployment.yml
kubeclt apply -f frontenc-service.yml
```