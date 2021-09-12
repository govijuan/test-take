import styled from 'styled-components'

const BotPageIconStyles = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &&.a-users-icon{
        background-color: ${ props => props.theme.highlightColor };
    }
    &&.r-messages-icon{
        background-color: ${ props => props.theme.greenIconColor };
    }
    &&.s-messages-icon{
        background-color: ${ props => props.theme.blueIconColor };
    }
`
export const IconImg = styled.img`

`


export default BotPageIconStyles;
