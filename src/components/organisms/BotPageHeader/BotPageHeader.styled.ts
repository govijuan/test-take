import styled from 'styled-components'
import { Row } from 'react-bootstrap'

const StyledBHeader = styled(Row)`
    border-bottom: 1px solid ${ props => props.theme.linesColor };
    padding: 0 0 30px;
`

export const HRightDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    color: ${ props => props.theme.txtLightColor };
    span{
        display: flex;
        align-items: center;
        font-size: 0.9rem;
    }
`

export const BotNameWrap = styled.div`
    padding-left: 10px;
    h2{
        color: ${ props => props.theme.darkTextColor };
        margin: 0;
        text-align: left;
    }
    span{
        color: ${ props => props.theme.txtLightColor };
        text-align: left;
        font-size: 0.9rem;
    }
    display: flex;
    flex-direction: column;
`

export const HLeftDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`

export default StyledBHeader