interface ISidebarLink {
  label: string
  link: '/employee' | '/tasks' | '/message'
}

export const sidebarLink: Array<ISidebarLink> = [
  { label: 'Manage Employee', link: '/employee' },
  { label: 'Manage Task', link: '/tasks' },
  { label: 'Message', link: '/message' },
]
