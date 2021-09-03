import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: ${ props => props.theme.cobaltBlue };
    height: ${ props => props.theme.headerHeight };
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.img`
    height: 18px;
    width: auto;
    display: block;
`

export default StyledHeader