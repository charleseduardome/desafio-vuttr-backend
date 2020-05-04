import { Router } from 'express';

import toolsRouter from './tools.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/tools', toolsRouter);

export default routes;
