# APM + ReactJS

Start the Docker containers using Docker Compose:
```shell
 docker-compose up -d 
```
This command will launch all necessary services in the background.

- Access the web client at http://localhost:3000/ and navigate through some pages;
- Now check it out the results in [Kibana page](http://localhost:5601/app/apm/traces?rangeFrom=now-15m&rangeTo=now).
