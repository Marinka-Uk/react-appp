import React, { useContext, useState } from 'react';


 const ContextMessage = React.createContext();

export  const useFirst = ()=>{
return useContext(ContextMessage)
}



export const Context = ({ children }) => {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Context.Provider
      value={{ showMessage, setShowMessage }}
    >

{children}

    </Context.Provider>
  );
};
