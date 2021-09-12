import React, {useContext} from 'react';
import { DataContext } from '../../../data/dataContext'
import { useParams } from 'react-router-dom';
import StyledChatbot from './Chatbot.styles';
import { Container } from 'react-bootstrap';
import BotPageHeader from '../../organisms/BotPageHeader/BotPageHeader';
import BotPageContent from '../../organisms/BotPageContent/BotPageContent';
import BotPageFooter from '../../molecules/BotPageFooter/BotPageFooter';

const Chatbot = () => {
    const {state} = useContext(DataContext)
    const { chatbotId } = useParams<{chatbotId: string}>()
    const itemObj = {...state.botsList.find( item => item.shortName === chatbotId)}
    const { name, shortName, image, created, plan, culture, analytics } = itemObj
    return (
        <StyledChatbot>
            <Container>
                <BotPageHeader name={name} shortName={shortName} image={image} created={created} />
                <BotPageContent 
                    culture={culture} 
                    activeUsers={analytics?.user.actived} 
                    recievedMessages={analytics?.message.received}
                    sentMessages={analytics?.message.sent}
                    plan={plan}
                />
                <BotPageFooter />
            </Container>

        </StyledChatbot>
    )
}



export default Chatbot