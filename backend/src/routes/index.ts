import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Estrutura inicial rodando' }),
);

export default routes;
