import React from 'react';
import StyledContainer from './Container.styles';

const Container = (props: { children: React.ReactChild | React.ReactFragment | null | undefined; }) => (
    <StyledContainer>{props.children}</StyledContainer>
)

export default Container