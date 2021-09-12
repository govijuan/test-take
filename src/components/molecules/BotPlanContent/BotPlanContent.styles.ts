import styled from 'styled-components'

const BotPlanContentStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    &>div{
        display: flex;
        flex-direction: column;
    }
`

export const PlanImage = styled.img`

`

export const PlanLabel = styled.span`
    color: ${ props => props.theme.txtLightColor };
`

export const PlanText = styled.span`
    color: ${ props => props.theme.darkTextColor };
    font-size: 2rem;
    font-weight: 500;
    line-height: 1;
    margin: 0 0 30px;
`

export default BotPlanContentStyles;
