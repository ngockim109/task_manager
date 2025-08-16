import PrimaryLink from '../common/PrimaryLink'
import { sidebarLink } from '@/constants/sidebarLink'

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 w-full py-4 px-2">
      {sidebarLink.map((link) => (
        <PrimaryLink className="p-2" to={link.link}>
          {link.label}
        </PrimaryLink>
      ))}
    </div>
  )
}

export default Sidebar
