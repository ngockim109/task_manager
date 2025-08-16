import { useRouter } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import Button from './Button'
import type { ButtonProps } from './Button'

const BackButton = ({ className, ...props }: ButtonProps) => {
  const router = useRouter()
  return (
    <Button
      className=""
      onClick={() => router.history.back()}
      icon={ArrowLeft}
      {...props}
    >
      Back
    </Button>
  )
}

export default BackButton
