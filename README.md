## Getting started

- Clone this repository.<br/>

```sh
git clone https://github.com/charleseduardome/desafio-vuttr-backend.git
```

- Create your database (postgres).<br/>
  `You can install and execute the backend of this project by using Docker or manually.`
- Renamed the file `.env.example` for `.env`.<br/>
- Configure the `.env` file with the access data base.<br/>
- Open the folder and run the `yarn` command to install all dependencies.<br/>
- Run migrations: `yarn typeorm migration: run`<br/>
- Check if tables were created.<br/>
- Run: `yarn dev: server` to start the server in development mode.

## Routes Users

- `POST / users`: Route gets `id`, `name` and `email`, inside body to register a new user.

## Routes Sessions

- `POST / sessions`: `user` and `token`, use the token for authorizations in http://localhost:3000/api-docs/

## Routes Tools

- `POST / tools`: Route gets `id`, `title`, `link`, `description` and `tags` inside body to register a new tool in an array in the following format:

```sh
{
  "title": "hotel",
  "link": "https://github.com/typicode/hotel",
  "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
  "tags":"node, organizing, webapps, domain, developer, https, proxy"
  //tags comma separated
}

```

- `GET / tools`: Route lists all tools and their tags;

- `GET / tools?tag=your_search`: Filter tools using a tag search query parameters;

- `DELETE / tools /: id`: Route that delete the tool with `id` present in the route parameters;

## Docs

After starting the application, you can access the documentation containing all available resources on the API by accessing: http://localhost:3000/api-docs/

You can also read the OpenAPI schema located in src/swagger.json.
