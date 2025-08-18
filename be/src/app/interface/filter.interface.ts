import type { OrderEnum } from '../enums/order.enum.ts'
import type { TaskStatusEnum } from '../enums/role.enum.ts'
import type { IMetadata } from './metadata.interface.ts'

export interface IFilter {
  page: number
  limit: number
  sort?: string | undefined
  order?: OrderEnum | undefined
  filters?: Record<string, unknown> | undefined
  fields?: string[] | undefined
  search?: string | undefined
}

export interface ITaskFilter {
  title: string
  description: string
  status: TaskStatusEnum
  dueDate: string
  completedDate: string
  users: string[]
}

export interface IPaginationResult<T> {
  data: T[] | []
  total: number
  totalPages: number
  page: number
  limit: number
}
