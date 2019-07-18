import Knex from 'knex';
import {knexSnakeCaseMappers} from 'objection';


export const connection = {
  host: '127.0.0.1',
  user: 'postgres',
  port: 5432,
  password: 'password',
  database: 'postgres',
};

// Initialize knex.
export const knexDb = Knex({
  client: 'pg',
  connection,
  ...knexSnakeCaseMappers(),
});
