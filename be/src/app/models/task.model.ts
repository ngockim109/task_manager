import type { TaskStatusEnum } from '../enums/role.enum.ts'
import type { IUser } from './user.model.ts'

export interface ITask {
  title: string
  description: string
  status: TaskStatusEnum
  dueDate: string
  completedDate: string
  users: IUser[]
}
