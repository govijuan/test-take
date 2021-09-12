import React from 'react'
import BotMainContentStyles, { AUDataCard, RMesssagesCard, SMessagesCard } from './BotMainContent.styles'
import RegionCard from '../../atoms/RegionCard/RegionCard';

const BotMainContent = (props: BMainContType) => {
    const { culture, activeUsers, recievedMessages, sentMessages } = props
    return (
        <BotMainContentStyles>
                <RegionCard culture={culture}  />
                <AUDataCard dataNumber={activeUsers} kind='activeUsers' dataLabel='Usuários ativos' />
                <RMesssagesCard dataNumber={recievedMessages} kind='recievedMessages' dataLabel='Mensagens recebidas' />
                <SMessagesCard dataNumber={sentMessages} kind='sentMessages' dataLabel='Mensagens enviadas' />
        </BotMainContentStyles>
    )
};

interface BMainContType{
    culture: string | undefined, 
    activeUsers: number | undefined,
    recievedMessages: number | undefined,
    sentMessages: number | undefined,
}

export default BotMainContent
