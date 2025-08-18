import { dbPath } from '../utils/db.ts'
import type { IMessage } from '../models/message.model.ts'
import BaseRepository from './base.repository.ts'

class MessageRepository extends BaseRepository<IMessage> {
  constructor() {
    super(dbPath.message)
  }
}

const messageRepository = new MessageRepository()
export default messageRepository
