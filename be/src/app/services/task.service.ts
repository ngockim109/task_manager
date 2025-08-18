import type { IFilter } from '../interface/filter.interface.ts'
import type { ITaskMeta } from '../interface/task.interface.ts'
import type { ITask } from '../models/task.model.ts'
import type { IUser } from '../models/user.model.ts'
import taskRepository from '../repositories/task.repository.ts'
import userRepository from '../repositories/user.repository.ts'

class TaskService {
  getTasks = async (queryParams: IFilter) => {
    try {
      const tasks = await taskRepository.findAll(queryParams)
      return tasks
    } catch (error: any) {
      console.log(error)
    }
  }
  getTask = async (id: string) => {
    try {
      const task = await taskRepository.find(id)
      if (!task) {
        return null
      }
      return this.populateTaskWithUsers(task)
    } catch (error: any) {
      console.log(error)
    }
  }
  createTask = async (
    newTask: Partial<ITask>,
  ): Promise<Partial<ITask> | null> => {
    try {
      const task = await taskRepository.insert({ ...newTask, userIds: [] })
      if (!task.id) {
        throw new Error(`Cannot create new task!`)
      }
      if (newTask.userIds && newTask.userIds.length > 0 && task.id) {
        const userPromise = newTask.userIds?.map((userId) =>
          userRepository.addTaskToUser(userId, task.id),
        )
        await Promise.all(userPromise)

        const updatedTask = taskRepository.updateData(task.id, {
          userIds: newTask.userIds,
        })
      }

      return await this.populateTaskWithUsers(task.id)
    } catch (error) {
      console.log(error)
      return null
    }
  }
  updateTask = async (
    id: string,
    newTask: Partial<ITask>,
  ): Promise<Partial<ITask> | null> => {
    try {
      const task = await taskRepository.find(id);
      if(!task) {
       throw new Error("Task does not exits!")
      };

      if(newTask.userIds && newTask.userIds.length > 0) {
        const oldUserIds = task.userIds;
        
        const removePromise = oldUserIds?.map((userId) => userRepository.removeTaskFromUser(userId, task.id));
        const addPromise = task.userIds?.map((userId)=>userRepository.addTaskToUser(userId, task.id));

        await Promise.all([...removePromise, ...addPromise]);
      }

      const updatedTask = await taskRepository.updateData(id, newTask);
      
      return this.populateTaskWithUsers(updatedTask)
    } catch (error) {
      console.log(error)
      return null;
    }
  }
  deleteTask = async (id: string) => {
    try {
      const task = await taskRepository.delete(id)
      return task;
    } catch (error) {
      console.log(error)
      return null;
    }
  }
  populateTaskWithUsers = async (
    task: Partial<ITask>,
  ): Promise<Partial<ITaskMeta>> => {
    const taskData: Partial<ITaskMeta> = { ...(task as ITask) }
    if (taskData.userIds && taskData.userIds.length > 0 && taskData.id) {
      const usersPromise = taskData.userIds.map((userId) =>
        userRepository.addTaskToUser(userId, taskData.id),
      )
      const users: IUser[] = await Promise.all(usersPromise)
      taskData.users = users
        .filter((user) => user !== null)
        .map((user: IUser) => ({
          id: user.id,
          avatar: user.avatar,
        } as Partial<IUser>))
    }
    return taskData;
  }
}
const taskService = new TaskService()

export default taskService
