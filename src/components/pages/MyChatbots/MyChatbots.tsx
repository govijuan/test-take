import React from 'react';
import StyledMyChatbots, {ChatbotsHeader} from './MyChatbots.styles';
import Container from '../../atoms/Container/Container';

import SortForm from '../../molecules/SortForm/SortForm';

const MyChatbots = () => {
    return (
        <StyledMyChatbots>
            <Container>
                <ChatbotsHeader>
                    <h1>My Chatbots</h1>
                    <SortForm />
                </ChatbotsHeader>
            </Container>
        </StyledMyChatbots>
    )
}

export default MyChatbots
