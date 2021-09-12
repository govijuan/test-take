import React from 'react'
import StyledBContent, {LeftContent, RightContent} from './BotPageContent.styles'
import BotMainContent from '../../molecules/BotMainContent/BotMainContent'
import BotPlanContent from '../../molecules/BotPlanContent/BotPlanContent'

const BotPageContent = (props: BotPContentType) => {
    const { culture, activeUsers, recievedMessages, sentMessages, plan} = props
    return (
        <StyledBContent>
            <LeftContent xs={{span: 12, order: 2}} sm={12} md={{span: 8, order: 1}} lg={9}>
                <BotMainContent culture={culture} activeUsers={activeUsers} recievedMessages={recievedMessages} sentMessages={sentMessages}/>
            </LeftContent>
            <RightContent xs={{span: 12, order: 1}} sm={12} md={{span: 4, order: 2}} lg={3}>
                <BotPlanContent plan={plan}/>
            </RightContent>
        </StyledBContent>
    )
}

interface BotPContentType{
    culture: string | undefined,
    activeUsers: number | undefined,
    recievedMessages: number | undefined,
    sentMessages: number | undefined,
    plan: string | undefined,
}

export default BotPageContent