import React from 'react'

interface MessageProps extends React.ComponentProps<'div'> {
  variant?: 'default' | 'secondary'
}

const Message = ({ children, variant = 'default', ...props }: MessageProps) => {
  const variantStyle = {
    default: 'bg-primary',
    secondary: 'bg-secondary',
  }

  return (
    <div className={`px-3 py-2 rounded-md ${variantStyle[variant]}`}>
      {children}
    </div>
  )
}

export default Message
