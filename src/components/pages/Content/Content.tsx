import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StyledContent from './Content.styles';

import MyChatbots from '../MyChatbots/MyChatbots';

const Content = () => (
    <StyledContent>
        <Switch>
            <Route path="/my-chatbots">
                <MyChatbots />
            </Route>
            <Route path="/chatbot:id">

            </Route>
            <Route path="/">
                <MyChatbots />
            </Route>
            <Route path="*">

            </Route>
        </Switch>
    </StyledContent>
)

export default Content