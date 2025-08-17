import { Router } from 'express'
import authController from '../controllers/auth.controller.ts'

const router = Router()

router.post('/phone/send', authController.sendOTPToPhone)
router.post('/phone/validate', authController.validateOTP)
router.post('/email/send', authController.sendOTPToEmail)

export default router
