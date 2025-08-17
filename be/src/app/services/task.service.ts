import type { IFilter } from '../interface/filter.interface.ts'
import type { ITask } from '../models/task.model.ts'

const getTasks = async (queryParams: IFilter) => {}
const createTask = async (newTask: ITask) => {}
const updateTask = async (id: string, newTask: ITask) => {}
const deleteTask = async (id: string) => {}

const taskService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
}

export default taskService
