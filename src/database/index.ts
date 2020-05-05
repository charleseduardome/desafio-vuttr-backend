import { createConnection } from 'typeorm';

createConnection({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  schema: 'public',
  synchronize: false,
  logging: false,
  entities: ['src/models/*.ts'],
  migrations: ['src/migrations/*.ts'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migrations',
  },
  ssl: true,
  migrationsRun: true,
});
