import type { NextFunction, Request, Response } from 'express'
import taskService from '../services/task.service.ts'
import { parseFilterQuery } from '../utils/filter.ts'
import type { ITask } from '../models/task.model.ts'

const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const queryParams = parseFilterQuery(req.query)
    const response = await taskService.getTasks(queryParams)
    res.status(200).json({
      message: 'Get tasks success!',
      data: response,
    })
  } catch (error: any) {
    res.status(400).json({ message: 'Fail to get tasks!', error })
  }
}
const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { status, title, description, dueDate, completedDate, users } =
      req.body
    const newTask: ITask = {
      status,
      title,
      description,
      dueDate,
      completedDate,
      users,
    }
    const task = await taskService.createTask(newTask)
    res.status(201).json({ message: 'Create task success!', data: task })
  } catch (error: any) {
    next(error)
  }
}
const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { status, title, description, dueDate, completedDate, users } =
      req.body
    const newTask: ITask = {
      status,
      title,
      description,
      dueDate,
      completedDate,
      users,
    }

    if (!id) {
      return res.json(400).json({ message: 'Task ID is required' })
    }

    const updatedTask = await taskService.updateTask(id, newTask)
    res.status(200).json({
      message: 'Udpate task success!',
      data: updatedTask,
    })
  } catch (error: any) {
    next(error)
  }
}
const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.json(400).json({ message: 'Task ID is required' })
    }
    const task = await taskService.deleteTask(id)
    res.status(200).json({ message: 'Delete task success!', data: task })
  } catch (error: any) {
    next(error)
  }
}

const taskController = {
  getTasks,
  updateTask,
  createTask,
  deleteTask,
}

export default taskController
