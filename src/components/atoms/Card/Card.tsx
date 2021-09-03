import React from 'react'
import StyledCard, { StyledBox }from './Card.styles'

const Card = (props: CardProps) => (
    <StyledCard {...props}>
        <StyledBox>
            {props.children}
        </StyledBox>   
    </StyledCard>
)

type CardProps = {
    children: React.ReactNode,
    className: string
}

export default Card