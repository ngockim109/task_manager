import type { TaskStatusEnum } from '../enums/role.enum.ts'
import type { IMetadata } from '../interface/metadata.interface.ts'
import type { IUser } from './user.model.ts'

export interface ITask extends IMetadata {
  title: string
  description: string
  status: TaskStatusEnum
  dueDate: string
  completedDate: string
  userIds?: string[]
}
