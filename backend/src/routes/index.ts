import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Estrutura inicial rodqando' }),
);

export default routes;
