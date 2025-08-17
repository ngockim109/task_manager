import { Router } from 'express'
import messageController from '../controllers/message.controller.ts'

const router = Router()

router.get('/:conversationId', messageController.getConversation)
router.post('/message', messageController.sendMessage)

export default router
