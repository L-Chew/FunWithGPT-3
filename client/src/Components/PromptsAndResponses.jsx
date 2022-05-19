import React from 'react';
import { useMainContext } from './MainProvider.jsx';
import PromptsAndResponsesEntry from './PromptsAndResponsesEntry.jsx';

function PromptsAndResponses(props) {
  const { prompt, setPrompt, allPromptsAndResponses, setAllPromptsAndResponses } = useMainContext();
  console.log('allPrompts: ', allPromptsAndResponses);

  return (
    <>
      <> {allPromptsAndResponses.map((set, i) => (<div key={i} set={set}/>)).map((entry, j) => (<PromptsAndResponsesEntry key={j} entry={entry}/>))} </>
    </>
  )
}

export default PromptsAndResponses;
