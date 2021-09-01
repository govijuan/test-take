import React from 'react';
import AppStyles from './App.styles';
import Header from '../molecules/header/Header';
import Content from './Content/Content';

function App() {
  return (
    <AppStyles>
      <Header />
      <Content />
    </AppStyles>
  );
}

export default App;
