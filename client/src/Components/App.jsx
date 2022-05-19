import React from 'react';
import MainProvider from './MainProvider.jsx';
import Form from './Form.jsx';
import PromptsAndResponses from './PromptsAndResponses.jsx';

const App = () => {
  return (
    <>
      <MainProvider>
        <h1>Fun with AI</h1>
        <Form />
        <PromptsAndResponses />
      </MainProvider>
    </>
  )
}

export default App;