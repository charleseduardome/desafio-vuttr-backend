import { getRepository } from 'typeorm';

import Tools from '../models/Tools';

interface Request {
  title: string;
  link: string;
  description: string;
  tags: string;
}

class CreateToolsService {
  public async execute({
    title,
    link,
    description,
    tags,
  }: Request): Promise<Tools> {
    const toolsRepository = getRepository(Tools);

    const tools = toolsRepository.create({
      title,
      link,
      description,
      tags: tags.split(',').map(tag => tag.trim()),
    });

    await toolsRepository.save(tools);
    return tools;
  }
}

export default CreateToolsService;
