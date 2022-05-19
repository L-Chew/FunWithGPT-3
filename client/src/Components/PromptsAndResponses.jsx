import React from 'react';
import { useMainContext } from './MainProvider.jsx';

function PromptsAndResponses(props) {
  const { prompt, setPrompt, allPromptsAndResponses, setAllPromptsAndResponses } = useMainContext();
  console.log('allPrompts: ', allPromptsAndResponses);

  return (
    <>
      <> {allPromptsAndResponses.map((list, i) => (<div key={i}>{list[0]}</div>))} </>
    </>
  )
}

export default PromptsAndResponses;
