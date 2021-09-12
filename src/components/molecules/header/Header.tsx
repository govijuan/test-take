import React from 'react'
import StyledHeader, { Logo } from './Header.styles'
import logo from '../../../resources/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
    <StyledHeader>
        <Link to="/">
            <Logo src={logo} />
        </Link>
    </StyledHeader>
)

export default Header