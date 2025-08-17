import type { Request, Response } from "express";

const getTasks = async(req: Request, res: Response) => {

}
const createTask = async(req: Request, res: Response) => {

}
const updateTask = async(req: Request, res: Response) => {

}
const deleteTask = async(req: Request, res: Response) => {

}

const taskController = {
    getTasks,
    updateTask,
    createTask,
    deleteTask
}

export default taskController;