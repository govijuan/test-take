import React from 'react'
import StyledCard from './Card.styles'

const Card = (props: CardProps) => (
    <StyledCard {...props}>
        {props.children}
    </StyledCard>
)

type CardProps = {
    children: React.ReactNode
}

export default Card