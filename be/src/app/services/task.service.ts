import type { IFilter } from '../interface/filter.interface.ts'
import type { ITask } from '../models/task.model.ts'
import taskRepository from '../repository/task.repository.ts'

const getTasks = async (queryParams: IFilter) => {
  try {
    const tasks = await taskRepository.findAll(queryParams);
    return tasks;
  } catch (error: any) {
    console.log(error)
  }
}
const createTask = async (newTask: Partial<ITask>) => {
  try {
    const task = await taskRepository.insert(newTask)
  } catch (error) {
    console.log(error)}
}
const updateTask = async (id: string, newTask: Partial<ITask>) => {}
const deleteTask = async (id: string) => {}

const taskService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
}

export default taskService
