import type React from 'react'

interface LoadingProps extends React.ComponentProps<'div'> {
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'active' | 'ban' | 'inactive'
}

const Badge = ({
  size = 'medium',
  variant = 'default',
  className,
  ...props
}: LoadingProps) => {
  const sizeStyle = {
    small: 'p-2',
    medium: 'p-4',
    large: 'p-6',
  }

  const variantStyle = {
    default: 'bg-primary text-primary-forground',
    active: 'bg-green-300 text-green-800 hover:bg-green-400',
    ban: 'bg-destructive/30 text-destructive-foreground hover:bg-destructive/40',
    inactive: 'bg-muted/30 text-muted-foreground hover:bg-muted/40',
  }
  return (
    <div
      className={`rounded-full ${sizeStyle[size]} ${variantStyle[variant]} ${className}`}
      {...props}
    >
      Badge
    </div>
  )
}

export default Badge
