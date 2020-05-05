import { createConnection } from 'typeorm';
import Users from '../models/Users';
import Tools from '../models/Tools';

if (process.env.NODE_ENV === 'development') {
  createConnection();
}

if (process.env.NODE_ENV === 'production') {
  createConnection({
    url: process.env.DATABASE_URL,
    type: 'postgres',
    entities: [Users, Tools],
    synchronize: true,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
}
