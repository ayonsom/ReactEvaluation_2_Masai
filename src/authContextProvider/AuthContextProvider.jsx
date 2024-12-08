import React, { createContext, useState } from 'react'
export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
    const [allCountries, setAllCountries] = useState([]);
    const [countryDetails, setCountryDetails] = useState([]);
  return (
    <AuthContext.Provider value={{allCountries, setAllCountries, countryDetails, setCountryDetails}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
