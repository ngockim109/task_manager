import { dbPath } from '../utils/db.ts'
import type { IUser } from '../models/user.model.ts'
import BaseRepository from './base.repository.ts'

class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(dbPath.user)
  }

  addTaskToUser = async (userId: string, taskId: string) => {
    const user = await this.find(userId)
    if (!user) {
      throw new Error(`User with ${userId} does not exits!`)
    }
    const currentTasks = user.taskIds || []
    await this.updateData(userId, {
      taskIds: [...currentTasks, taskId],
    } as unknown as Partial<IUser>)
  }

  removeTaskFromUser = async (userId: string, taskId: string) => {
    const user = await this.find(userId)
    if (!user) {
      throw new Error(`User with ${userId} does not exits!`)
    }
    const currentTasks = user.taskIds || []
    const updatedTask = currentTasks.filter((id) => id !== taskId)
    await this.updateData(userId, {
      taskIds: updatedTask,
    } as unknown as Partial<IUser>)
  }
}

const userRepository = new UserRepository()
export default userRepository
