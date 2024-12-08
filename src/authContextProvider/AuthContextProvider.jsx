import React, { createContext, useState } from 'react'
export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
    const [allCountries, setAllCountries] = useState([]);
    const [countryDetails, setCountryDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputData, setInputData] = useState("");
  return (
    <AuthContext.Provider value={{allCountries, setAllCountries, 
        countryDetails, setCountryDetails,
        loading, setLoading, inputData, setInputData}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
