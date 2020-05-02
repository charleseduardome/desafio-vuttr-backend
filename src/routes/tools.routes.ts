import { Router } from 'express';
import { getRepository, Like } from 'typeorm';

import CreateToolsService from '../services/CreateToolsService';
import DeleteToolsService from '../services/DeleteToolsService';
import Tools from '../models/Tools';

const toolsRouter = Router();

toolsRouter.get('/', async (request, response) => {
  const { tag } = request.query;

  const toolsRepository = getRepository(Tools);

  if (tag) {
    const tools = await toolsRepository.find({
      select: ['id', 'title', 'link', 'description', 'tags'],
      where: {
        tags: Like(`%${tag}%`),
      },
    });

    return response.json(tools);
  }
  const tools = await toolsRepository.find({
    select: ['id', 'title', 'link', 'description', 'tags'],
  });

  return response.json(tools);
});

toolsRouter.post('/', async (request, response) => {
  const { title, link, description, tags } = request.body;

  const createTools = new CreateToolsService();

  const tools = await createTools.execute({
    title,
    link,
    description,
    tags,
  });

  delete tools.created_at;
  delete tools.updated_at;

  return response.status(201).json(tools);
});

toolsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deleteTools = new DeleteToolsService();

  await deleteTools.execute({ id });

  return response.status(204).send();
});

export default toolsRouter;
