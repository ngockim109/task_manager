import React from 'react'
import Loading from './Loading'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'
import type {LucideProps} from 'lucide-react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'default' | 'outline' | 'danger'
  loading?: boolean
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  vertical?: boolean
}

const Button = ({
  className,
  variant = 'default',
  loading = false,
  children,
  type = 'submit',
  vertical = false,
  icon,
  ...props
}: ButtonProps) => {
const Icon = icon

  const variantStyle = {
    default: 'bg-primary text-primary-foreground',
    danger: 'bg-danger text-danger-foreground',
    outline: 'bg-transparent border-primary text-primary',
  }

  return (
    <button
      className={`cursor-pointer w-full p-3 rounded-md flex items-center gap-1 relative ${variantStyle[variant]} ${loading ? 'opacity-50' : 'opacity-100'} ${className}`}
      {...props}
    >
      {loading && (
        <Loading
          size="small"
          className="absolute left-1/2 transform -translate-x-1/2"
        />
      )}
      <div
        className={`flex gap-1 items-center justify-center ${vertical && 'flex-col'}`}
      >
        {Icon && <Icon className="w-4 h-4"/>}
        {children}
      </div>
    </button>
  )
}

export default Button
