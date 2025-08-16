import React from 'react'
import ErrorMessage from './ErrorMessage'

export interface InputProps extends React.ComponentProps<'input'> {
  error?: boolean
  errorMessage?: string
}

const Input = ({
  className,
  type,
  error = false,
  errorMessage,
  ...props
}: InputProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <input
        className={`w-full p-2 border rounded-md transition-colors focus:ring-2 ${error ? 'border-destructive focus:ring-destructive' : 'border-border focus:ring-primary'} ${className}`}
        data-slot="input"
        type={type}
        {...props}
      />
      {error && errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  )
}

export default Input
