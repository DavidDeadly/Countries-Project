import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountries } from '../../redux/actions/index.js';

const FiltersSelector = () => {
  const [conditions, setConditions] = useState([]);
  const activities = useSelector(state => state.activities);
  const dispatch = useDispatch();

  const onHandleFilter = (e) => {
    if(e.target.name === "activities") {
      const updatedConditions = conditions.filter(c => c[0] !== e.target.name);
      return !e.target.value ? setConditions([...updatedConditions])
      : (() => {
        const actCond = [e.target.name, e.target.value];
        setConditions([...updatedConditions, actCond]);
      })()
    }
    setConditions([...e.target.selectedOptions].map(opt => [opt.parentElement.name, opt.value]));
  }
  
  useEffect(() => {
    dispatch(filterCountries(conditions));
  }, [dispatch, conditions])

  return (
    <div id="filters">
      <div id="cont-container">
        <label htmlFor='continents'>Search by continents:</label>
        <select name="continent" id="continents" multiple size={6} onChange={onHandleFilter}>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
      <div id="act-container">
        <label htmlFor="activities">Search by activities</label>
        <select name="activities" id="activities" disabled={!activities.length ? true:false} onChange={onHandleFilter}>
          {activities.length && <option></option>}
          {activities?.map(a => <option key={a.id} value={a.id}>{a.name}</option> )}
        </select>
      </div>

    </div>
  );
}

export default FiltersSelector;
