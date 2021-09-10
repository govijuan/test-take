import React, { useState } from 'react'
import StyledMyChatbots, {ChatbotsHeader} from './MyChatbots.styles'
import { Container } from 'react-bootstrap'
import PageTitle from '../../atoms/PageTitle/PageTitle'
import SortForm from '../../molecules/SortForm/SortForm'
import Cards from '../../organisms/Cards/Cards'
import List from '../../organisms/List/List'

const MyChatbots = () => {
    const [showList, setShowList] = useState(false)
    const botListComponent = showList ? <List /> : <Cards />
    const toggleShowList = () => {
        const newShowListValue = showList === true ? false : true
        setShowList(newShowListValue)
    }

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
