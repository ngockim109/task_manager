import type { IMetadata } from '../interface/metadata.interface.ts'

export interface IMessage extends IMetadata {
  senderId: string
  receivedId: string
  content: string
}
