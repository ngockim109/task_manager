import React from 'react'

export interface LabelProps extends React.ComponentProps<'label'> {
  error?: boolean
}

const Label = ({
  className,
  error = false,
  children,
  ...props
}: LabelProps) => {
  return (
    <label
      className={`${error ? 'text-destructive' : 'text-secondary'} ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}

export default Label
