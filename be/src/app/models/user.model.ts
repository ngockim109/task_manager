import type { IMetadata } from '../interface/metadata.interface.ts'
import type { IRole } from './role.model.ts'
import type { ITask } from './task.model.ts'

export interface IUser extends IMetadata {
  phone?: string
  email?: string
  avatar?: string
  isDelete: boolean
  name: string
  address: string
  role: IRole
  department: string
  taskIds?: string[]
}
