import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCountries } from '../../redux/actions/index.js';

const ContinentsSelector = () => {
  const [conditions, setConditions] = useState([]);
  const dispatch = useDispatch();

  const onHandleContinentChange = (e) => {
    setConditions([...e.target.options].reduce((a, b) => {
      if(b.selected) {
        a.push([b.parentElement.name, b.value]);
      }
      return a;
    }, []));
  }

  useEffect(() => {
    dispatch(filterCountries(conditions));
  }, [dispatch, conditions])

  return (
    <div>
      <label htmlFor='continents'>Search for continents:</label>
      <select name="continent" id="continents" multiple size={6} onChange={onHandleContinentChange}>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
      </select>
    </div>
  );
}

export default ContinentsSelector;
