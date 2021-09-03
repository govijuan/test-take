import React from 'react';
import StyledMyChatbots, {ChatbotsHeader} from './MyChatbots.styles';
import { Container } from 'react-bootstrap'
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
                <Cards botsList={[]}/>
            </Container>
        </StyledMyChatbots>
    )
}

export default MyChatbots
