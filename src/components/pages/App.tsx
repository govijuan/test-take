import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DataProvider } from '../../data/dataContext'
import {Theme} from '../theme/Theme';
import AppStyles from './App.styles';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../molecules/header/Header';
import Content from './Content/Content';

function App() {
  return (
    <DataProvider>
      <ThemeProvider theme={Theme}>
        <AppStyles>
          <Router>
            <Header />
            <Content />
          </Router>
        </AppStyles>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
