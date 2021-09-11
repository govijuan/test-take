import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import Card from '../../atoms/Card/Card'

const StyledListBot = styled(Row)`
    flex-direction: row;
    justify-content: center;
    height: 60px;
    padding: 0;
    margin: 5px 0;
    a.list-bot-link{
        flex: 1;
        text-decoration: none;
    }
`

export const StarContainer = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BotName = styled.h5`
    color: ${props => props.theme.darkTextColor};
    font-size: 1rem;
    margin: 0;
    flex: 1;
    text-align: left;
    padding-left: 10px;
`
export const ListCard = styled(Card)`
    height: 100%;
    &&>div{
        height: 100%;
        padding: 5px 15px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .rt-list-flex-Item{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`

export const StyledCreated = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${ props => props.theme.txtLightColor };
    font-size: 0.9rem;
`

export default StyledListBot