import React, { useEffect } from 'react';
import axios from 'axios';
import {openAIKey} from '../../../config';
import { useMainContext } from './MainProvider.jsx';


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
    async function postData() {
      try {
        let request = await axios.post('https://api.openai.com/v1/engines/text-curie-001/completions', prompt, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openAIKey}`
          }
        })
        if (request.status === 200) {
          console.log(request)
          console.log('prompt: ', prompt)
          let data = allPromptsAndResponses;
          data.push([[prompt.prompt, `${request.data.choices[0].text}`]])
          setAllPromptsAndResponses(data);
          setPrompt({prompt: ''});
        }
      } catch(err) {
        console.log(err);
      }
    }
    postData();

    // axios.post('https://api.openai.com/v1/engines/text-curie-001/completions', prompt, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${openAIKey}`
    //   }
    // })
    // .then((res) => {
    //   console.log('res.data: ', res.data)
    //   let data = allPromptsAndResponses;
    //       data.push([prompt.prompt, `${res.data.choices[0].text}`])
    //       setAllPromptsAndResponses(data);
    //   // setAllPrompts(prevArray => {
    //   //   [...prevArray, prompt.prompt]
    //   // })
    //   setPrompt({prompt: ''});
    //   // let responses = allResponses;
    //   // responses.push(res.data.choices[0].text)
    //   // setAllResponses(responses);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
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