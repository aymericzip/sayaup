import React, { FC, HTMLAttributes } from 'react'

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
   return <button {...props}>{props.children}</button>
}

export default Button
