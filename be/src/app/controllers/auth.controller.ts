import type { Request, Response } from 'express'

const sendOTPToPhone = async (req: Request, res: Response) => {
  return res.json(200)
}

const sendOTPToEmail = async (req: Request, res: Response) => {}

const validateOTP = async (req: Request, res: Response) => {}

const authController = {
  sendOTPToPhone,
  sendOTPToEmail,
  validateOTP,
}

export default authController
