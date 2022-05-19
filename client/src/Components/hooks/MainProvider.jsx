import React, { useState, useContext } from 'react';
import useLocalStorage from './useLocalStorage.jsx';

const MainContext = React.createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export default function MainProvider({ children }) {
  const [prompt, setPrompt] = useState({prompt: ''});
  const [allPromptsAndResponses, setAllPromptsAndResponses] = useLocalStorage('PR', []);

  return (
    <MainContext.Provider value={{ prompt, setPrompt, allPromptsAndResponses, setAllPromptsAndResponses }}>
      {children}
    </MainContext.Provider>
  )
}