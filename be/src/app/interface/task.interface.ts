import type { ITask } from '../models/task.model.ts'
import type { IUser } from '../models/user.model.ts'

export interface ITaskMeta extends ITask {
  users?: Partial<IUser>[]
}
