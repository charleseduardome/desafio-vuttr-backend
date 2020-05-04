import { createConnection } from 'typeorm';

createConnection({
  url: process.env.DATABASE_URL,
  type: 'postgres',
  entities: ['./src/models/*.ts'],
  synchronize: true,
  ssl: true,
});
