import React, { useEffect } from 'react';
import axios from 'axios';
import { openAIKey } from '../../../config';
import { useMainContext } from './MainProvider.jsx';
import styled from 'styled-components';

const StyledForm = styled.form `
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const StyledSubmit = styled.input `
  background-color: rgba(195, 234, 255, 0.8);
`;

function Form(props) {
  const { prompt, setPrompt, allPromptsAndResponses, setAllPromptsAndResponses } = useMainContext();

  function handleChange(e) {
    e.preventDefault();
    setPrompt({
      prompt: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('https://api.openai.com/v1/engines/text-curie-001/completions', prompt, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openAIKey}`
      }
    })
    .then((res) => {
      let data = allPromptsAndResponses;
      data.push([[prompt.prompt, `${res.data.choices[0].text}`]])
      setAllPromptsAndResponses(data);
      setPrompt({prompt: ''});
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <textarea type='text' name='prompt' placeholder='Enter text' value={prompt.prompt} onChange={handleChange} />
        <StyledSubmit type='submit' />
      </StyledForm>
    </>
  )
}

export default Form;