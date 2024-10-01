import { createContext, useState } from "react";


export const AppContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function ContextProvider({ children }){

    const [globalLoading, setGlobalLoading] = useState(false)

    const [snackBar, setSnackBar] = useState({open: false, message: '', error: true})

    function handleCloseSnackBar(){
        setSnackBar({open: false, message: '', error: false})
    }

    function setFeedbackMessage(message,error){
        setSnackBar({open: true, message: message, error: error})
    }

    return (
        <AppContext.Provider value={{snackBar, handleCloseSnackBar, setFeedbackMessage, globalLoading, setGlobalLoading}}>
            {children}
        </AppContext.Provider>
    )
}