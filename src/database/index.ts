import { createConnection } from 'typeorm';
import Tools from '../models/Tools';
import Users from '../models/Users';

createConnection({
  url: process.env.DATABASE_URL,
  type: 'postgres',
  entities: [Tools, Users],
  synchronize: true,
  ssl: true,
});
