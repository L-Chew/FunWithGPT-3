import React, {useState} from 'react';
import axios from 'axios';
import {openAIKey} from '../../../config';


function Form(props) {
  const [prompt, setPrompt] = useState({prompt: ''});
  const [allPrompts, setAllPrompts] = useState([]);
  const [allResponses, setAllResponses] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setPrompt({
      prompt: e.target.value
    });
    setAllPrompts(oldArray => {
      [...oldArray, e.target,value]
    })
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
      console.log('res.data: ', res.data)
    })
    .catch((err) => {
      console.log(err);
    });
    setPrompt({prompt: ''});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='prompt' placeholder='Enter text' value={prompt.prompt} onChange={handleChange} />
        <input type='submit' />
      </form>
    </>
  )
}

export default Form;