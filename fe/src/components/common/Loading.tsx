import React from 'react'

interface LoadingProps extends React.ComponentProps<'div'> {
  size?: 'small' | 'medium' | 'large'
  variant?: 'default' | 'primary'
}

const Loading = ({
  size = 'medium',
  variant = 'default',
  className,
  ...props
}: LoadingProps) => {
  const sizeStyle = {
    small: 'w-4 h-4',
    medium: 'w-10 h-10',
    large: 'w-15 h-15',
  }

  const variantStyle = {
    default: 'border-white',
    primary: 'border-primary',
  }
  return (
    <div
      className={`animate-spin border-t-transparent border border-2 rounded-full ${variantStyle[variant]} ${sizeStyle[size]} ${className}`}
    ></div>
  )
}

export default Loading
