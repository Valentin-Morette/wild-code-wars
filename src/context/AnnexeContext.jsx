import { createContext, useContext } from 'react';

const AnnexeContext = createContext();

export default AnnexeContext;

export function AnnexeContextProvider({ children }) {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <AnnexeContext.Provider value={{ capitalize }}>
      {children}
    </AnnexeContext.Provider>
  );
}

export const useAnnexe = () => useContext(AnnexeContext);
