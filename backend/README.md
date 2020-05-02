## Getting started

Clone this repository.
Create your database (postgres).
Renamed the file `.env.example` for `.env`.
Configure the `.env` file with the access data base.
Open the folder and run the `yarn` command to install all dependencies.
Run migrations: `yarn typeorm migration: run`
Check if tables were created.
Run: `yarn dev: server` to start the server in development mode.

## Routes

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
