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
    const { botsList, showList, orderBy, searchTerm } = state
    const [botsLists, setBotsLists] = useState({
        faveBotsList: botsList.filter((item) => item.favorite === true), 
        unfaveBotsList: botsList.filter( (item) => item.favorite === false )
    })

    useEffect(() => {
        setBotsLists({
            faveBotsList: botsList.filter((item) => item.favorite === true),
            unfaveBotsList: botsList.filter((item) => item.favorite === false)
        })
    }, [botsList])

    const setOrderedArrays = () => {
        const orderedFBotsList = orderBotsListBy(botsLists.faveBotsList, orderBy)
        const orderedUnFBotsList = orderBotsListBy(botsLists.unfaveBotsList, orderBy)
        setBotsLists({
            faveBotsList: orderedFBotsList,
            unfaveBotsList: orderedUnFBotsList
        })
    }

    useEffect(()=>{
        if(orderBy !== ''){
            return setOrderedArrays()
        }
        
    }, [orderBy])

    useEffect(() => {
        if(searchTerm){
            console.log('dispara o search')
        }
    }, [searchTerm])

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
