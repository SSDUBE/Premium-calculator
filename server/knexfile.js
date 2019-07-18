module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'password',
      database : 'postgres',
      port: 5432
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `./src/db/migrations/`
    },
    seeds: {
      directory: `./src/db/seeds/`
    },
    debug: false
  },
};
