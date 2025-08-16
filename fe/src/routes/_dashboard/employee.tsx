import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/employee')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_dashboard/employee"!</div>
}
