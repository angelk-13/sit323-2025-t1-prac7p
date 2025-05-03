# SIT323 9.1P: Adding a database to your application

## Requirements

- Docker
- Kubernetes

## Steps

1. Clone the repository

```
   git clone github.com/angelk-13/sit323-2025-prac9p
```

2. Deploy MongoDB and Backups

```
   kubectl apply -f mongo-full.yaml
```

3. Ensure everything is running

```
    kubectl get pods
    kubectl get svc mongodb-service
    kubectl get cronjob mongo-backup

```

4. Deploy Items API

```
    kubectl apply -f items-api-deployment.yaml
    kubectl apply -f items-api-service.yaml

```

5. Port-forward and test

```
   kubectl port-forward svc/items-api 3000:3000
```

6. Monitor status

```
    kubectl run --rm -it mongostat --image=mongo:6.0 --restart=Never -- mongostat --host mongodb-service -u admin -p securepass --authenticationDatabase admin

```
