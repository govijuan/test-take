import React from 'react';
import StyledHeader, { Logo } from './Header.styles';
import logo from '../../../resources/images/logo.png'

const Header = () => (
    <StyledHeader>
        <Logo src={logo} />
    </StyledHeader>
)

export default Header