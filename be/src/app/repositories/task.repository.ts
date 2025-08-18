import { dbPath } from '../utils/db.ts'
import type { ITask } from '../models/task.model.ts'
import BaseRepository from './base.repository.ts'

class TaskRepository extends BaseRepository<ITask> {
  constructor() {
    super(dbPath.task)
  }
}

const taskRepository = new TaskRepository()
export default taskRepository
