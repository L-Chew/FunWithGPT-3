import React from 'react';
import MainProvider from './MainProvider.jsx';
import Form from './Form.jsx';
import PromptsAndResponses from './PromptsAndResponses.jsx';
import styled from 'styled-components';

const StyledTitle = styled.h1 `
  display: flex;
  flex-direction: column;
  background-color: rgba(247, 222, 255, 0.851);
  text-align: center;
  font-family: fantasy;
  font-size: 45px;
  text-shadow: 2px 5px rgb(181, 208, 251);
  font-weight: bolder;
  padding: 10px 0 5px 0;
  color: white;
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