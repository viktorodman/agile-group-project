import {knex, Knex} from 'knex';

type User = {
  id: number,
  name: string
}

const config: Knex.Config = {
    client: 'pg',
    connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    }
};

export const db = knex(config);


