import React from 'react';
import AppStyles from './App.styles';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../molecules/header/Header';
import Content from './Content/Content';

function App() {
  return (
    <AppStyles>
      <Router>
        <Header />
        <Content />
      </Router>
    </AppStyles>
  );
}

export default App;
