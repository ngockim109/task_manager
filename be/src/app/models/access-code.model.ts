import type { IMetadata } from '../interface/metadata.interface.ts'

export interface IAccessCode extends IMetadata {
  code: string
  phone?: string
  email?: string
  expiresAt: string
}
