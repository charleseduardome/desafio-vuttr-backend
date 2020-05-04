import 'reflect-metadata';

import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './swagger.json';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('(^o^) Server started on port 3000');
});
