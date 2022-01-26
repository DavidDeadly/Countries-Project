import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import $ from "jquery";

import HeaderContainer from '../styled/HeaderContainer.jsx';
import ContinentsSelector from './ContinentsSelector.jsx';
import DataList from './Datalist.jsx';
import SortingForm from './SortingForm.jsx';
import { querySearch } from '../../redux/actions/index.js';

const registerClicks = {
  alph: false,
  popu: false
}

const Header = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  const onHandleSearch = ({target}) => {
    setSearch(target.value);
  }

  useEffect(() => {
    dispatch(querySearch(search));
    return () => {
      const inputs = $(".st-input");
      [...inputs].forEach(input => input.checked = false);
      registerClicks.alph = false;
      registerClicks.popu = false;
    }
  }, [dispatch, search]);

  return (
    <HeaderContainer>
      <div id="head">
        <Link to="/">
          <h1>Countries App</h1>
        </Link>
        <Link to="/activity">
          <button id="btn-act">New Activity</button>
        </Link>
      </div>
      <div id="inputs">
        <div>
          <label htmlFor="searchbar">Search Bar</label>
          <input id="searchbar" type="search" name="country-name" list="countriesList" placeholder="search por a country" onChange={onHandleSearch}/>
          <DataList id="countriesList"/>
        </div>
        <ContinentsSelector/>
        <SortingForm registerClicks={registerClicks}/>
      </div>
    </HeaderContainer>
  );
}

export default Header;
