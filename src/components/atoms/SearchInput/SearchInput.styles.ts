import styled from 'styled-components'

const StyledInput = styled.input`
    border: 1px solid ${props => props.theme.linesColor};
    height: 40px;
    border-radius: ${props => props.theme.BoxBoderRadius};
    padding: 0 10px;
    margin: 0 5px;
    width: 200px;
    &:focus, &:active{
        border-width: 2px;
    }
    &:focus-visible{
        outline: none;
        border-width: 2px;
    }
    @media (max-width: 575px){
        grid-column: 1 / 5;
        width: 100%;
    }
`
export default StyledInput