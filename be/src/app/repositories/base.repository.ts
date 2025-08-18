import {
  Database,
  endAt,
  get,
  limitToFirst,
  limitToLast,
  orderByChild,
  orderByKey,
  push,
  query,
  ref,
  remove,
  serverTimestamp,
  set,
  startAt,
  update,
} from 'firebase/database'
import database from '../config/db.config.ts'
import { dbPath } from '../utils/db.ts'
import type {
  IFilter,
  IPaginationResult,
} from '../interface/filter.interface.ts'
import { Order } from '../enums/order.enum.ts'

class BaseRepository<T = any> {
  private tableName: string
  private database: Database

  constructor(tableName: string) {
    this.tableName = tableName
    this.database = database
  }
  protected getRef(path = '') {
    const fullPath = path ? `${this.tableName}/${path}` : this.tableName
    return ref(database, fullPath)
  }

  insert = async (data: Partial<T>): Promise<Partial<T>> => {
    const tableRef = this.getRef()
    const newTableRef = push(tableRef)
    await set(newTableRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
    return { ...data, id: newTableRef.key }
  }

  updateData = async (id: string, data: Partial<T>): Promise<Partial<T>> => {
    const tableRef = this.getRef(id)
    await update(tableRef, { ...data, updatedAt: serverTimestamp() })
    return { ...data, id: id }
  }

  delete = async (id: string): Promise<Partial<T>> => {
    const tableRef = this.getRef(id)
    const snapshot = await get(tableRef)
    if (!snapshot.exists()) {
      throw new Error(`${this.tableName} does not exits!`)
    }
    const item: Partial<T> = snapshot.val()
    await remove(tableRef)
    return item
  }

  find = async (id: string): Promise<Partial<T> | null> => {
    const tableRef = this.getRef(id)
    const snapshot = await get(tableRef)
    if (!snapshot.exists()) {
      return null
    }
    return { id, ...snapshot.val() }
  }

  findAll = async (queryParams: IFilter): Promise<IPaginationResult<T>> => {
    const tableRef = this.getRef()
    const {
      limit = 10,
      page = 1,
      fields,
      filters,
      order = Order.DESC,
      search,
      sort,
    } = queryParams
    let paginationResult: IPaginationResult<T> = {
      data: [],
      limit: limit,
      page: page,
      total: 0,
      totalPages: 0,
    }
    let dbQuery = query(tableRef)

    if (sort) {
      if (sort === 'id') {
        dbQuery = query(dbQuery, orderByKey())
      } else {
        dbQuery = query(dbQuery, orderByChild(sort))
      }
    }

    if (search && sort && sort !== 'id') {
      dbQuery = query(
        dbQuery,
        orderByChild(sort),
        startAt(search),
        endAt(search + '\uf8ff'),
      )
    }

    if (limit) {
      if (order === Order.DESC) {
        dbQuery = query(dbQuery, limitToLast(limit))
      } else {
        dbQuery = query(dbQuery, limitToFirst(limit))
      }
    }

    const snapshot = await get(dbQuery)
    if (!snapshot.exists()) {
      return paginationResult
    }

    let items: Partial<T>[] = []
    snapshot.forEach((child) => {
      const data = child.val()
      items.push({ ...data, id: child.key })
    })

    if (filters && Object.entries(filters).length > 0) {
      items = this.applyFilters(items, filters)
    }

    const total = items.length
    const totalPage = Math.ceil(total / limit)

    if (page > 1) {
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      items.slice(startIndex, endIndex)
    }

    if (fields && Array.isArray(fields)) {
      items = this.selectFields(items, fields)
    }

    return paginationResult
  }

  applyFilters = (
    items: any[],
    filters: Record<string, unknown>,
  ): Partial<T>[] => {
    return items.filter((item) => {
      return Object.entries(filters).every(([key, value]) => {
        if (key in item) {
          const dataValue = item[key]

          if (typeof value === 'string') {
            return dataValue.toLowerCase().includes(value.toLocaleLowerCase())
          } else if (Array.isArray(value)) {
            return value.includes(dataValue)
          } else {
            return value === dataValue
          }
        }
        return false
      })
    })
  }

  selectFields = (items: any[], fields: string[]): Partial<T>[] => {
    return items.map((item) => {
      const selectedItem: Partial<T> = {}
      fields.forEach((field) => {
        // @ts-expect-error
        selectedItem[field] = items[field]
      })
      return selectedItem
    })
  }
}

export default BaseRepository
