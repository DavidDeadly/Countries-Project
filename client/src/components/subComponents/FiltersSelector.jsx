import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import $ from "jquery";

import { filterCountries } from '../../redux/actions/index.js';
import StyledFilters from '../styled/StyledFilters.jsx';

const FiltersSelector = ({onFilter}) => {
  const [conditions, setConditions] = useState([]);
  const activities = useSelector(state => state.activities);
  const dispatch = useDispatch();

  const onHandleFilter = (e) => {
    if(e.target.name === "activities") {
      const updatedConditions = conditions.filter(c => c[0] !== e.target.name);
      return !e.target.value ? setConditions([...updatedConditions])
      : (() => {
        $("#continents").prop("selectedIndex", 0);
        setConditions([[e.target.name, e.target.value]]);
      })()
    }
    $("#activities").prop("selectedIndex", 0);
    setConditions([...e.target.selectedOptions].map(opt => [opt.parentElement.name, opt.value]));
  }
  
  useEffect(() => {
    dispatch(filterCountries(conditions));
  }, [dispatch, conditions])

  return (
    <StyledFilters>
      <div id="cont-container">
        <label htmlFor='continents'>Continents:</label>
        <select name="continent" id="continents" multiple size={6} onChange={onHandleFilter} onClick={onFilter}>
          <option value="Asia" style={{display: "none"}}>All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
      <div id="act-container">
        <label htmlFor="activities">Activity:</label>
        <select name="activities" id="activities" disabled={!activities.length ? true:false} onChange={onHandleFilter} onClick={onFilter}>
          {activities.length && <option id="nullOpt"></option>}
          {activities?.map(a => <option key={a.id} value={a.id}>{a.name}</option> )}
        </select>
      </div>
      <h3>Filter By</h3>
    </StyledFilters>
  );
}

export default FiltersSelector;
