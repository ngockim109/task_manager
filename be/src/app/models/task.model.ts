import type { TaskStatusEnum } from "../enums/role.enum.ts";

export interface ITask {
    title: string,
    description: string,
    status: TaskStatusEnum,
    dueDate: string,
    completedDate: string
}