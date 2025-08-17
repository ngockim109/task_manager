export const Order = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const

export type OrderEnum = (typeof Order)[keyof typeof Order]
