import { createContext } from "react";


export const AppContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function ContextProvider({ children }){


    return (
        <AppContext.Provider value={{teste: true}}>
            {children}
        </AppContext.Provider>
    )
}