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

#### Request
`GET /api/extensions`
```bash
curl --request GET \
  --url http://localhost:3000/api/extensions \
  --header 'Content-Type: application/json'
```

#### What does it do?
It returns an array of all extensions objects present in the database.



#### Request
`POST /api/extensions`
```bash
curl --request POST \
  --url http://localhost:3000/api/extensions \
  --header 'Content-Type: application/json' \
  --data '{
	
  }'
```

#### What does it do?
It creates a new extensions and stores it in the db. The extension is represented as JSON and stored in --data flag.



#### Request
`GET /api/extensions/:id`
```bash
curl --request GET \
  --url http://localhost:3000/api/extensions/:id \
  --header 'Content-Type: application/json'
```


#### What does it do?
Return the extension with the id precised in the URL as `:id`