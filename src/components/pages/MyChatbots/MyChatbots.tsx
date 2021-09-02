import React from 'react';
import StyledMyChatbots, {ChatbotsHeader} from './MyChatbots.styles';
import Container from '../../atoms/Container/Container';
import PageTitle from '../../atoms/PageTitle/PageTitle';

import SortForm from '../../molecules/SortForm/SortForm';
import Cards from '../../organisms/Cards/Cards';

const MyChatbots = () => {
    return (
        <StyledMyChatbots>
            <Container>
                <ChatbotsHeader>
                    <PageTitle>My Chatbots</PageTitle>
                    <SortForm />
                </ChatbotsHeader>
                <Cards></Cards>
            </Container>
        </StyledMyChatbots>
    )
}

export default MyChatbots
