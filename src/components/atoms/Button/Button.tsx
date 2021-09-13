import React from 'react'
import StyledButton from './Button.styles'

const Button = (props: any) => (
    <StyledButton onClick={props.onClick} >{props.children}</StyledButton>
)


export default Button