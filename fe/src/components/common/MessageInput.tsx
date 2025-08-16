import { ArrowRight } from 'lucide-react'
import Input from './Input'
import Button from './Button'

const MessageInput = () => {
  return (
    <div className="flex gap-3 items-center">
      <Input placeholder="Reply message" />
      <Button icon={<ArrowRight />}></Button>
    </div>
  )
}

export default MessageInput
