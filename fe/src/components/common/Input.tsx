import React from 'react'

const Input = ({ className, type, ...props }: React.ComponentProps<"input">) => {
    return (
        <input
            className=''
            data-slot="input"
            type={type}
            {...props}
        />
    )
}

export default Input