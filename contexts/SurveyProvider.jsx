import React, { useContext, createContext, useState } from 'react'

const SurveyContext = createContext();

export function userSurvey() {
    return useContext(SurveyContext)
}

export default SurveyProvider = ({children}) => {
    const [hasAnswered, setHasAnswered] = useState(false);

    return (
        <SurveyContext.Provider value={{hasAnswered, setHasAnswered}}>
            {children}
        </SurveyContext.Provider>
    )
}