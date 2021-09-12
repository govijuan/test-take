import styled from 'styled-components'

const BotPageFooterStyles = styled.div`
    border-top: 1px solid ${ props => props.theme.linesColor };
    padding: 30px 0;
    &>div{
        font-size: 0.8rem;
        color: ${ props => props.theme.darkTextColor };
        a{
            color: ${ props => props.theme.darkTextColor };
            text-decoration: none;
            &:hover, :active{
                color: ${ props => props.theme.highlightColor }
            }
        }
    }
`

export default BotPageFooterStyles;
