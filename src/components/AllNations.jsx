import React, { useContext } from 'react'
import { AuthContext } from '../authContextProvider/AuthContextProvider'
const AllNations = () => {
    const {allCountries, setAllCountries, countryDetails, setCountryDetails} = useContext(AuthContext);
    console.log(countryDetails);

    const fetchCountryDetail = async(countryName) =>{
        // console.log(countryName);
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            const data = await res.json();
            // console.log(data);
            setCountryDetails(data);
            
            
        } catch (error) {
            
        }
        
    }

    const fetchNations = async() =>{
        try {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            // console.log(data);
            setAllCountries(data);
            
        } catch (error) {
            console.error("Error : ", error)
        }

    }
  return (
    <div>
      <h2>From allNations...</h2>
      <button onClick={fetchNations}>Fetch Nations</button>

      {countryDetails.length === 0? 
       (<div id="all-countries-container">
        {allCountries.map((country, index)=>(
            <div key={index} className="country-card">
                {/* <p>Count : {index+1}</p> */}
                <img src={country.flags.png} alt={country.flags.alt} />
                <h2>Name : {country.name.common}</h2>
                <h3>Population : {country.population}</h3>
                <h3>region : {country.region}</h3>
                <h3>capital : {country.capital}</h3>
                <button onClick={(e)=>fetchCountryDetail(country.name.common)}>More Details</button>
                <hr />
            </div>
           
        ))}
      </div>) : (<div>
        <h1>Country Details : </h1>
        <h4>Native Name : {countryDetails[0].name.nativeName.eng.official}</h4>
        <p>Currrency Name : {countryDetails[0].currencies.SHP.name}</p>
        <p>{JSON.stringify(countryDetails[0])}</p>
        
        
        </div>)
        
      }

      
    </div>
  )
}

export default AllNations
