import { Outlet, createFileRoute } from '@tanstack/react-router'
import Header from '@/components/layout/Header'

export const Route = createFileRoute('/_dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
