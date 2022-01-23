import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import HeaderContainer from '../styled/HeaderContainer';
import { countriesSort } from "../../redux/actions/sortCountries";
import { filterCountries } from '../../redux/actions/filterCountries';


const Header = () => {
  const countries = useSelector(state => state.countries);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Countries App</h1>
      </Link>
      <div id="inputs">
        <label htmlFor="searchbar">
          <input id="searchbar" type="search" name="country-name" list="countriesList" placeholder="search por a country"/>
          <datalist id="countriesList">
            {countries.map(({ name }, i)=> <option key={i} value={name}/> )}
          </datalist>
        </label>
        <label>
          Filter
          <input id="x" type="checkbox" onClick={(e) => {
            dispatch(filterCountries({ value: "Americas"}))
            console.log(e.target.checked)
          }
        }/>
        </label>
        <button onClick={() => dispatch(countriesSort({desc: true, param: "population"}))}>Sort</button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
