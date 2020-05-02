import { getRepository } from 'typeorm';
import Tools from '../models/Tools';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const toolsRepository = getRepository(Tools);

    const tool = await toolsRepository.findOne(id);

    if (!tool) {
      throw new Error('This tools does not exists');
    }

    await toolsRepository.remove(tool);
  }
}

export default DeleteTransactionService;
