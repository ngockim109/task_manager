import { get, limitToFirst, push, query, ref, remove, set, update } from 'firebase/database'
import database from '../config/db.config.ts'
import { dbPath } from '../utils/db.ts'
import type { ITask } from '../models/task.model.ts'
import type { IFilter } from '../interface/filter.interface.ts'

const insert = async (task: Partial<ITask>) => {
  const taskRef = ref(database, dbPath.task)
  const newTaskRef = push(taskRef)
  await set(newTaskRef, task)
  return { id: newTaskRef.key, ...task }
}

const updateTask = async (id: string, task: Partial<ITask>) => {
  const taskRef = ref(database, `${dbPath.task}/${id}`)
  await update(taskRef, task)
  return { id, task }
}

const deleteTask = async (id: string) => {
  const taskRef = ref(database, `${dbPath.task}/${id}`)
  await remove(taskRef)
  return { id }
}

const find = async (id: string) => {
    const taskRef = ref(database, `${dbPath.task}/${id}`);
    const snapshot = await get(taskRef);
    if(!snapshot.exists()) {
        return null
    }
    return {id, ...snapshot.val()}
}

const findAll = async (queryParams: IFilter) => {
    const taskRef = ref(database, dbPath.task);
    const {limit, page, fields, filters, order, search, sort} = queryParams
    const snapshot = await query(taskRef, limitToFirst(limit));

}

const taskRepository = {
  insert,
  update: updateTask,
  find,
  delete: deleteTask,
  findAll,
}

export default taskRepository
