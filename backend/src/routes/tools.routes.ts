import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateToolsService from '../services/CreateToolsService';
import Tools from '../models/Tools';

const toolsRouter = Router();

toolsRouter.get('/', async (request, response) => {
  return response.json({ ok: true });
});

toolsRouter.post('/', async (request, response) => {
  const { title, link, description, tags } = request.body;

  const createTools = new CreateToolsService();

  await createTools.execute({
    title,
    link,
    description,
    tags,
  });

  return response.json({
    title,
    link,
    description,
    tags: tags.split(',').map(tag => tag.trim()),
  });
});

export default toolsRouter;
