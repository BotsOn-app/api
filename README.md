# botson_api

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

The official API of the BotsOn platform made by @5CYTH3 & @Nirbose.

## Install & Contribute

### With Docker

If you are willing to use docker for this project, you need docker and docker-compose installed. 
In the project directory, run :
```bash
docker compose up -d
```
Docker will retrieve all dependencies and the database automatically.
You can also develop inside a container, which is **recommended** to avoid any "it works on my machine" and to work on a clean environment. To do so, just __attach your favourite IDE to the running container__.

### Without Docker
If you are willing to contribute to the project by forking it on your local machine 

The project uses prisma. To connect prisma to your running database, you have to add a DATABASE_URL key in a .env file :

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
```

_(Just remember that you need to replace `username`, `password` and `mydb` by the corresponding values. And IF YOU ARE USING DOCKER TO CONTAINERIZE BOTH THE APP AND THE DATABASE, REPLACE `localhost` BY `postgres`)_