import React, {useContext} from 'react';
import { DataContext } from '../../../data/dataContext'
import { useParams } from 'react-router-dom';
import StyledChatbot from './Chatbot.styles';
import { Container } from 'react-bootstrap';
import BotPageHeader from '../../organisms/BotPageHeader/BotPageHeader';

const Chatbot = () => {
    const {state} = useContext(DataContext)
    const { chatbotId } = useParams<{chatbotId: string}>()

    const itemObj = {...state.botsList.find( item => item.shortName = chatbotId)}
    const {shortName, name, description, image, created, plan } = itemObj
    console.log('itemObj: ', itemObj)
    return (
        <StyledChatbot>
            <Container>
                <BotPageHeader name={name} shortName={shortName} image={image} created={created} />
            </Container>
        </StyledChatbot>
    )
}



export default Chatbot