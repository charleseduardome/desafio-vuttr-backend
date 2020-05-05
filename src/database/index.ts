import { createConnection } from 'typeorm';

createConnection({
  type: 'postgres',
  entities: ['./src/models/*.ts'],
  migrations: ['./src/migrations/*.ts'],
  migrationsRun: true,
  synchronize: true,
  url: process.env.DATABASE_URL,
  ssl: true,
});

// export default async function buildConnectionPromise(): Promise<Connection> {
//   const connection = await createConnection({
//     type: 'postgres',
//     entities: ['./src/models/*.ts'],
//     migrations: ['./src/migrations/*.ts'],
//     migrationsRun: false,
//     synchronize: false,
//     url: process.env.DATABASE_URL,
//     ssl: true,
//   });
//   await connection.runMigrations();
//   await connection.synchronize();
//   return connection;
// }
