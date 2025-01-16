import React, { useState } from 'react';
import './App.css';
import { AppRoutes } from './components/Routes';

const App = () => {
  return (
    <div className="App">
      <AppRoutes/>
            {/* <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            end: true,
          },
        ]}
      /> */}
    </div>
  );
};

export default App;
