import React, { useState } from 'react';
import StyledMyChatbots, {ChatbotsHeader} from './MyChatbots.styles';
import { Container } from 'react-bootstrap'
import PageTitle from '../../atoms/PageTitle/PageTitle';
import SortForm from '../../molecules/SortForm/SortForm';
import Cards from '../../organisms/Cards/Cards';

const MyChatbots = () => {
    const [showList, setShowList] = useState(false)

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
                <Cards />
            </Container>
        </StyledMyChatbots>
    )
}

export default MyChatbots
