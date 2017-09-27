# Vinyl

A community for record enthusiasts to review their favorite albums.

Part of the application has already been built for you. Your job is to take it to completion.

## Getting Started

Run `$ npm run` to see the list of commands available. To see what each command does, look at `package.json`.

The app uses a basic Express file structure, and includes SQL files to set up the schema and import data.

```sh
src/
  albums.sql          # seed album data
  database.js         # database connection and queries
  package.json        # npm standard
  public/             # static assets go here
  README.md           # you are here
  schema.sql          # define database schema here
  server.js           # web server
  views/              # html templates go here
```

### Setting Up Your Database

Use the following commands to set up and seed your database:

1. Install dependencies while in root directory by running in command line `$ npm install`
2. Set up database and load seed `$ npm run db:init`
3. If you need to reset the database, then run `$ npm run db:reset`
