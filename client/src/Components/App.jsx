import React from 'react';
import Form from './Form.jsx';
import MainProvider from './MainProvider.jsx';
import PromptsAndResponses from './PromptsAndResponses.jsx';
import PromptsAndResponsesEntry from './PromptsAndResponsesEntry.jsx';

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