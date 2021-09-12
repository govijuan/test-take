import React from 'react'
import StyledBContent, {LeftContent, RightContent} from './BotPageContent.styles'
import BotMainContent from '../../molecules/BotMainContent/BotMainContent'

const BotPageContent = (props: BotPContentType) => {
    const { culture, activeUsers, recievedMessages, sentMessages, plan} = props
    return (
        <StyledBContent>
            <LeftContent className='col-md-9'>
                <BotMainContent culture={culture} activeUsers={activeUsers} recievedMessages={recievedMessages} sentMessages={sentMessages}/>
            </LeftContent>
            <RightContent className='col-md-3'>
                Right content here
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