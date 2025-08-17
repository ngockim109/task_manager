import type { Request, Response } from 'express'

const sendMessage = async (req: Request, res: Response) => {}

const getConversation = async (req: Request, res: Response) => {}

const messageController = {
  sendMessage,
  getConversation,
}

export default messageController
