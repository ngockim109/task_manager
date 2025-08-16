import React, { useState } from 'react'

interface ImageProps extends React.ComponentProps<'img'> {
  fallback: string
}

const Image = ({
  fallback,
  className,
  children,
  src,
  ...props
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src)
  return (
    <img
      src={imgSrc}
      onError={() => setImgSrc(fallback)}
      className={className}
      {...props}
    >
      {children}
    </img>
  )
}

export default Image
