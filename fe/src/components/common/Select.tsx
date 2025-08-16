import React from 'react'
import ErrorMessage from './ErrorMessage'

export interface SelectProps extends React.ComponentProps<'select'> {
  options: Array<any>
  error?: boolean
  errorMessage?: string
}

const Select = ({
  className,
  options = [],
  value,
  onChange,
  error = false,
  errorMessage,
  ...props
}: SelectProps) => {
  return (
    <div className="w-full">
      <select
        value={value}
        onChange={onChange}
        className={`w-full p-2 border transition-colors focus:ring-2 rounded-md ${error ? 'border-destructive focus:ring-destructive' : 'border-border focus:ring-primary'}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  )
}

export default Select
