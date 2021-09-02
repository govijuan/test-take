import React from 'react'
import StyledTitle from './PageTitle.styles'

const PageTitle = (props: PTitleProps) => (
    <StyledTitle {...props} >
        {props.children}
    </StyledTitle>
)

type PTitleProps = {
    children: React.ReactNode
}

export default PageTitle