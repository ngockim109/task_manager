import { createFileRoute } from '@tanstack/react-router'
import PhoneInputForm from '@/components/auth/form/PhoneInputForm'

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <PhoneInputForm />
    </div>
  )
}
