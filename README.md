# botson_api
The official API of the BotsOn platform made by @5CYTH3 & @Nirbose.

## Install & Contribute
To contribute to the project, just fork the project, clone your repository and run those few commands :

```bash
cd myrepo/
npm i
npm run start:dev
```

The project uses prisma. To connect prisma to your running database, you have to add a DATABASE_URL key in a .env file :
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
```
*(Just remember that you need to replace `username` `password` and `mydb` by the corresponding values)*

## Endpoints
Here a described all the different endpoints that cover the API.
