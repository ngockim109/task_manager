import React from 'react'
import Loading from './Loading'

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'default' | 'outline' | 'danger'
  loading?: boolean
}

const Button = ({
  className,
  variant = 'default',
  loading = false,
  children,
  ...props
}: ButtonProps) => {
  const variantStyle = {
    default: 'bg-primary text-primary-foreground',
    danger: 'bg-danger text-danger-foreground',
    outline: 'bg-transparent border-primary text-primary',
  }

  return (
    <button
      className={`w-full p-3 rounded-md flex items-center gap-1 relative ${variantStyle[variant]} ${loading ? 'opacity-50' : 'opacity-100'} ${className}`}
      {...props}
    >
      {loading && (
        <Loading
          size="small"
          className="absolute left-1/2 transform -translate-x-1/2"
        />
      )}
      <div>{children}</div>
    </button>
  )
}

export default Button
