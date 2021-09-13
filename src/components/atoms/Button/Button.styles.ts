import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${props => props.theme.highlightColor};
    color: #fff;
    height: 39px;
    border-radius: ${props => props.theme.BoxBoderRadius};
    border:none;
    padding: 0 15px;
    margin: 0 5px;
    font-weight: 700;
    @media (max-width: 1199px){
        font-size: 0.8rem
    }
`
export default StyledButton