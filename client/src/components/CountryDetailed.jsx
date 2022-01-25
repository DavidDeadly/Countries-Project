import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getDetailed } from '../redux/actions/index.js';

const CountryDetailed = () => {
  const { code } = useParams();
  const country = useSelector(state => state.country);
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const gettting = async() => {
      await dispatch(getDetailed(code))
      setloading(false);
    }
    gettting();
  }, [dispatch, code]);
  
  return (
      <div>
        {loading ? <h1>Loading...</h1>
        : <>
          <h1>{country.name} / {country.code}</h1>
          <h2>{country.capital}</h2>
          <img src={country.flagImg} alt={`Flag of ${country.name}`} />
          <h4>Population: {country.population}</h4>
          <h4>Area: {country.area}</h4>
          <ul>{country.activities.map(a => <li key={a.id}>{a.name}</li> )}</ul>
          <h1>{country.continent}</h1>
          <h2>{country.subregion}</h2>
        </>
        }
      </div>
  );
}

export default CountryDetailed;
