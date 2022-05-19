import React, { useState, useContext } from 'react';

const MainContext = React.createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainProvider({ children }) {
  const [prompt, setPrompt] = useState({prompt: ''});
  const [allPromptsAndResponses, setAllPromptsAndResponses] = useState([]);

  return (
    <MainContext.Provider value={{ prompt, setPrompt, allPromptsAndResponses, setAllPromptsAndResponses }}>
      {children}
    </MainContext.Provider>
  )
}