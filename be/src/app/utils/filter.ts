import { OrderEnum } from '../enums/order.enum.ts'
import type { IFilter } from '../interface/filter.interface.ts'

export const parseFilterQuery = (query: any): IFilter => {
  const { page, limit, fields, filters, order, search, sort } = query
  const pageParam = parseInt(page ?? '') ?? 1
  const limitParam = parseInt(limit ?? '') ?? 10
  const fieldsParam = (fields?.split(',') ?? []) as string[]
  const filtersParam = filters ?? {}
  const orderParam = (order as OrderEnum) ?? OrderEnum.DESC
  const queryParams: IFilter = {
    page: pageParam,
    limit: limitParam,
    fields: fieldsParam,
    filters: filtersParam,
    order: orderParam,
    search,
    sort,
  }
  return queryParams
}
