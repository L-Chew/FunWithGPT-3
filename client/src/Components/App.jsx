import React from 'react';
import MainProvider from './MainProvider.jsx';
import Form from './Form.jsx';
import PromptsAndResponses from './PromptsAndResponses.jsx';
import styled from 'styled-components';

const StyledTitle = styled.h1 `
  display: flex;
  flex-direction: column;
  background-color: rgba(225, 203, 255, 0.851);
  text-align: center;
  font-family: fantasy;
  font-weight: bolder;
`;

const App = () => {
  return (
    <>
      <MainProvider>
        <StyledTitle>Fun with AI</StyledTitle>
        <Form />
        <PromptsAndResponses />
      </MainProvider>
    </>
  )
}

export default App;