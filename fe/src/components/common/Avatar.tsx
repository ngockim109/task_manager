import React from 'react'
import Image from './Image'

interface AvatarProps extends React.ComponentProps<'button'> {
  size?: 'small' | 'medium' | 'large'
  avatar?: string
}

const Avatar = ({
  className,
  size = 'medium',
  avatar,
  ...props
}: AvatarProps) => {
  const sizeStyle = {
    small: 'w-4 h-4',
    medium: 'w-10 h-10',
    large: 'w-15 h-15',
  }

  return (
    <button className={`rounded-full ${sizeStyle[size]}`} {...props}>
      <Image fallback="/default_avatar.jpg" />
    </button>
  )
}

export default Avatar
