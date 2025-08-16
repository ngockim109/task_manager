import { Link } from '@tanstack/react-router'
import type { LinkComponentProps } from '@tanstack/react-router'

const PrimaryLink = ({
  className,
  to,
  children,
  ...props
}: LinkComponentProps) => {
  return (
    <Link to={to} className={`text-blue-500 ${className}`} {...props}>
      {children}
    </Link>
  )
}

export default PrimaryLink
