import styled from 'styled-components'
import Card from '../../atoms/Card/Card'

const StyledBCard = styled(Card)`
    margin: 10px 0;
`

export const BotName = styled.h5`
    color: ${props => props.theme.darkTextColor};
    padding: 15px 0 0 ;
    margin: 0;
`

export const BotShortName = styled.h6`
    color: ${ props => props.theme.txtLightColor};
    font-size: 0.9rem;
    padding: 5px 0 10px;
    margin: 0 0 20px;
    font-weight: 300;
`

export default StyledBCard