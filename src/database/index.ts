import { createConnection } from 'typeorm';

if (process.env.NODE_ENV === 'development') {
  createConnection();
}

if (process.env.NODE_ENV === 'production') {
  createConnection({
    url: process.env.DATABASE_URL,
    type: 'postgres',
    entities: ['dist/models/*.js'],
    migrations: ['dist/database/migrations/*.js'],
    cli: {
      entitiesDir: 'dist/entities',
      migrationsDir: 'dist/database/migrations',
      subscribersDir: 'dist/database/subscribers',
    },
    migrationsRun: true,
    synchronize: true,
    logging: true,
    extra: {
      ssl: true,
    },
  });
}
