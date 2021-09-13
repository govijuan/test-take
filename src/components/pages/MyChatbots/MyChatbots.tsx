import React, { useContext, useEffect, useState } from 'react'
import StyledMyChatbots, { ChatbotsHeader } from './MyChatbots.styles'
import { DataContext } from '../../../data/dataContext'
import { orderBotsListBy, filterBySearchTerm } from '../../../helpers/filterHelpers'
import { Container } from 'react-bootstrap'
import PageTitle from '../../atoms/PageTitle/PageTitle'
import SortForm from '../../molecules/SortForm/SortForm'
import Cards from '../../organisms/Cards/Cards'
import List from '../../organisms/List/List'

const MyChatbots = () => {
    const {state} = useContext(DataContext)
    const { botsList, showList, orderBy, searchTerm } = state
    const [botsLists, setBotsLists] = useState({
        faveBotsList: botsList.filter((item) => item.favorite === true), 
        unfaveBotsList: botsList.filter( (item) => item.favorite === false )
    })

    useEffect(() => {
        let newFaveBotsList = botsList.filter((item) => item.favorite === true)
        let newUnfaveBotsList = botsList.filter((item) => item.favorite === false)
        
        if(orderBy !== ''){
            newFaveBotsList = orderBotsListBy(newFaveBotsList, orderBy)
            newUnfaveBotsList = orderBotsListBy(newUnfaveBotsList, orderBy)
        }
    
        if(searchTerm !== ''){
            newFaveBotsList = filterBySearchTerm(searchTerm, newFaveBotsList)
            newUnfaveBotsList = filterBySearchTerm(searchTerm, newUnfaveBotsList)
        }

        setBotsLists({
            faveBotsList: newFaveBotsList ,
            unfaveBotsList: newUnfaveBotsList
        })
    }, [botsList, orderBy, searchTerm])

    const botListComponent = showList ? <List faveBotsList={botsLists.faveBotsList}  unfaveBotsList={botsLists.unfaveBotsList} /> : <Cards  faveBotsList={botsLists.faveBotsList} unfaveBotsList={botsLists.unfaveBotsList} />

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
