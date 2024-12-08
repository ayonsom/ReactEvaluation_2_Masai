import React, { useContext } from 'react'
import { useState } from 'react';
import { AuthContext } from '../authContextProvider/AuthContextProvider'
const AllNations = () => {
    const {allCountries, setAllCountries, countryDetails, setCountryDetails, loading, setLoading,
      inputData, setInputData
    } = useContext(AuthContext);

    const[prev,setPrev] = useState([])

    const fetchCountryDetail = async(countryName) =>{
        // console.log(countryName);
        try {
            setLoading(true);
            const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            const data = await res.json();
            // console.log(data);
            setCountryDetails(data);            
        } catch (error) {
            console.error("Error : ",error)
        }
        finally{
          setLoading(false);
        }
        
    }

    const fetchNations = async() =>{
      // console.log("Clicked")
        try {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            // console.log(data);
            setAllCountries(data);
            
        } catch (error) {
            console.error("Error : ", error)
        }

    }

    const handleInput=(e)=>{
      setInputData(e.target.value)
    }
    const findCountry = (e) =>{
      e.preventDefault();
      // console.log(inputData);
      setPrev(allCountries);
      const arr = allCountries.filter((country)=>(
        country.name.common.small() === inputData.small()
      ));
      // console.log(arr);
      setAllCountries(arr);
      
    }

  return (
    <div>
      {countryDetails.length === 0 || allCountries.length === 0? (<><h3>Please click on the button below to fetch all Nations...</h3>
      <button 
      disabled={loading || allCountries.length !==0 }
      onClick={fetchNations}
      
      >Fetch Nations
      </button></>) : null}
      <br />
      {allCountries.length > 0 && countryDetails.length === 0?
          (<><input value={inputData} type="text" placeholder='Search a Country Here' onChange={handleInput} style={{padding:"10px"}}/> 
            <button onClick={findCountry}>Go</button>
            <button onClick={(e)=>{
              setInputData("");
              setAllCountries(prev);}}>
                Reset
              </button>
            </>
          )
          : null
       }
      <br /><br />
      {countryDetails.length === 0? 
       (<div id="all-countries-container">

        
        {allCountries.map((country, index)=>(
            <div key={index} className="country-card">
                {/* <p>Count : {index+1}</p> */}
                <div id="flag">
                  <img id='flag-image' src={country.flags.png} alt={country.flags.alt} />
                </div>
                <h3>Name : {country.name.common}</h3>
                <h4>Population : {country.population}</h4>
                <h4>region : {country.region}</h4>
                <h4>capital : {country.capital}</h4>
                <button onClick={(e)=>fetchCountryDetail(country.name.common)}>More Details</button>
            </div>
           
        ))}
      </div>) : (
        <div>
            <button onClick={(e)=>setCountryDetails([])}>Back to All Nations</button>
            <br />
            <br />
            <div style={{padding:"20px", background: "#cececec0"}}>
              <img id='flag-image' src={countryDetails[0]["flags"]["png"]} alt="" />
            </div>
            
            {/* {console.dir(countryDetails[0])} */}
            {/* <p>{JSON.stringify(countryDetails[0])}</p> */}
            <h2>Country Details : </h2>
            <h4>Native Name : {countryDetails[0].name.official}</h4>
            <p>Currrency Name : {JSON.stringify(countryDetails[0].currencies)}</p>
            {/* <p>{JSON.stringify(countryDetails[0])}</p> */}
        
        
        </div>)
        
      }

      
    </div>
  )
}

export default AllNations
