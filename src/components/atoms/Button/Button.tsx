import React from 'react'
import StyledButton from './Button.styles'

const Button = (props: ButtonProps) => (
    <StyledButton {...props} >{props.children}</StyledButton>
)

type ButtonProps = {
    children: React.ReactNode
}

export default Button