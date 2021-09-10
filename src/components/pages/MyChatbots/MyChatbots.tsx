import React, { useContext } from 'react'
import StyledMyChatbots, {ChatbotsHeader} from './MyChatbots.styles'
import { DataContext } from '../../../data/dataContext'
import { Container } from 'react-bootstrap'
import PageTitle from '../../atoms/PageTitle/PageTitle'
import SortForm from '../../molecules/SortForm/SortForm'
import Cards from '../../organisms/Cards/Cards'
import List from '../../organisms/List/List'

const MyChatbots = () => {
    const {state, } = useContext(DataContext)
    const { botsList, showList } = state
    const botListComponent = showList ? <List botsList={botsList} /> : <Cards  botsList={botsList} />

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
