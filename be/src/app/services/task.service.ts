import type { IFilter } from '../interface/filter.interface.ts'
import type { ITask } from '../models/task.model.ts'
import taskRepository from '../repositories/task.repository.ts'

const getTasks = async (queryParams: IFilter) => {
  try {
    const tasks = await taskRepository.findAll(queryParams)
    return tasks
  } catch (error: any) {
    console.log(error)
  }
}
const createTask = async (
  newTask: Partial<ITask>,
): Promise<Partial<ITask> | null> => {
  try {
    const task = await taskRepository.insert(newTask)
    return task
  } catch (error) {
    console.log(error)
    return null
  }
}
const updateTask = async (
  id: string,
  newTask: Partial<ITask>,
): Promise<Partial<ITask> | null> => {
  try {
    const task = await taskRepository.updateData(id, newTask)
    return task
  } catch (error) {
    console.log(error)
    return null
  }
}
const deleteTask = async (id: string) => {
  try {
    const task = await taskRepository.delete(id)
    return task
  } catch (error) {
    console.log(error)
    return null
  }
}

const taskService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
}

export default taskService
