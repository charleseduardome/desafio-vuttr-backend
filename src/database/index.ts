import { createConnection } from 'typeorm';

createConnection();

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
