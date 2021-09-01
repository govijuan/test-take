import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StyledContent from './Content.styles';

import MyChatbots from '../MyChatbots/MyChatbots';
import Chatbot from '../Chatbot/Chatbot';
import NotFound from '../NotFound/NotFound';

const Content = () => (
    <StyledContent>
        <Switch>
            <Route path="/my-chatbots">
                <MyChatbots />
            </Route>
            <Route path="/chatbot/:chatbotId">
                <Chatbot />
            </Route>
            <Route path="/">
                <MyChatbots />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </StyledContent>
)

export default Content