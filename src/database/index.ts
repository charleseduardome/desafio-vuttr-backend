import { createConnection } from 'typeorm';

if (process.env.NODE_ENV === 'development') {
  createConnection();
}

if (process.env.NODE_ENV === 'production') {
  createConnection({
    url: process.env.DATABASE_URL,
    type: 'postgres',
    entities: ['dist/models/*.js'],
    synchronize: true,
    extra: {
      ssl: true,
    },
  });
}
