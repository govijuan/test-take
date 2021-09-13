import React, { useContext, useEffect, useState } from 'react'
import StyledMyChatbots, {ChatbotsHeader} from './MyChatbots.styles'
import { DataContext } from '../../../data/dataContext'
import { orderBotsListBy } from '../../../helpers/filterHelpers'
import { Container } from 'react-bootstrap'
import PageTitle from '../../atoms/PageTitle/PageTitle'
import SortForm from '../../molecules/SortForm/SortForm'
import Cards from '../../organisms/Cards/Cards'
import List from '../../organisms/List/List'

const MyChatbots = () => {
    const {state} = useContext(DataContext)
    const { botsList, showList, orderBy } = state
    const [faveBotsList, setFBotsList] = useState(botsList.filter((item) => item.favorite === true))
    const [unfaveBotsList, setUnFBotsList] = useState(botsList.filter( (item) => item.favorite === false ))

    useEffect(() => {
        setFBotsList(botsList.filter((item) => item.favorite === true))
        setUnFBotsList(botsList.filter((item) => item.favorite === false))
    }, [botsList])

    useEffect(()=>{
        setFBotsList(orderBotsListBy(faveBotsList, orderBy))
        setUnFBotsList(orderBotsListBy(unfaveBotsList, orderBy))
    }, [orderBy, faveBotsList, unfaveBotsList])

    const botListComponent = showList ? <List faveBotsList={faveBotsList}  unfaveBotsList={unfaveBotsList} /> : <Cards  faveBotsList={faveBotsList} unfaveBotsList={unfaveBotsList} />

    return (
        <StyledMyChatbots>
            <Container>
                <ChatbotsHeader>
                    <PageTitle>My Chatbots</PageTitle>
                    <SortForm />
                </ChatbotsHeader>
                {botListComponent}
            </Container>
        </StyledMyChatbots>
    )
}

export default MyChatbots
