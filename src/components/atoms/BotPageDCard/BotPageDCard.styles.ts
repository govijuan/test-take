import styled from 'styled-components'
import Card from '../Card/Card'

const AUsersCardStyles = styled(Card)`
    height: 100%;
    &&>div{
        padding: ${ props => props.theme.cardsBigPadding };
        height: 100%;
        display: flex;
        align-items: center;
    }
`

export const AUTxtWrap = styled.div`
    color: ${ props => props.theme.darkTextColor };
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: ${ props => props.theme.botPage.txtPaddingLeft };
    .big-txt{
        font-size: ${ props => props.theme.botPage.bigTxtSize };
        font-weight: ${ props => props.theme.botPage.bigTxtWeight };
        line-height: ${ props => props.theme.botPage.bigTxtLineHeight };
    }
    .small-txt{
        font-size: ${ props => props.theme.botPage.smallTxtSize };
    }
`

export default AUsersCardStyles;
