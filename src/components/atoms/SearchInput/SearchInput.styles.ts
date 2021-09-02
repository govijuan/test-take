import styled from 'styled-components'

const StyledInput = styled.input`
    border: 1px solid #D2DFE6;
    height: 40px;
    border-radius: 6px;
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
`
export default StyledInput