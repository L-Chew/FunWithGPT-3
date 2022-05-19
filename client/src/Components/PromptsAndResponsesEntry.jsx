import React from 'react';

function PromptsAndResponsesEntry({ entry }) {
  console.log('entry: ', entry)
  return (
    <>
      <div>
        Prompt: {entry.props.set[0][0]}
      </div>
      <div>
        Response: {entry.props.set[0][1]}
      </div>
      <br/>
    </>
  )
}

export default PromptsAndResponsesEntry;