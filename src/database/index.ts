import { createConnection } from 'typeorm';

import * as PostgressConnectionStringParser from 'pg-connection-string';

const connectionOptions = PostgressConnectionStringParser.parse(
  process.env.DATABASE_URL,
);

return createConnection(<ConnectionOptions>{
  driver: {
    type: process.env.TYPEORM_DRIVER_TYPE,
    host: connectionOptions.host,
    port: connectionOptions.port || 5432,
    username: connectionOptions.user,
    password: connectionOptions.password,
    database: connectionOptions.database,
  },
  entities: [...this.entities],
  subscribers: [...this.subscribers],
}).catch(error => console.log(error));
