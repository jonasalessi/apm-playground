# APM + ReactJS

Start the Docker containers using Docker Compose:
```shell
 docker-compose up -d 
```
This command will launch the necessary services in the background.

- Run the [web application](./apm-web-client) and navigate through some pages;
- Now check it out the results in [Kibana page](http://localhost:5601/app/apm/traces?rangeFrom=now-15m&rangeTo=now).
