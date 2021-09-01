import React from 'react';
import { useParams } from 'react-router-dom';
import StyledChatbot from './Chatbot.styles';

const Chatbot = () => {
    const { chatbotId } = useParams<{chatbotId: string}>()
    return (
        <StyledChatbot>
            <h1>Styled Chatbot {chatbotId}</h1>
        </StyledChatbot>
    )
}



export default Chatbot