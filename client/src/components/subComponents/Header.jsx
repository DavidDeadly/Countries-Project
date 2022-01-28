import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { SiElasticsearch } from "react-icons/si"
import $ from "jquery";

import HeaderContainer from '../styled/HeaderContainer.jsx';
import FiltersSelector from './FiltersSelector.jsx';
import DataList from './Datalist.jsx';
import SortingForm from './SortingForm.jsx';
import { querySearch } from '../../redux/actions/index.js';

const registerClicks = {
  alph: false,
  popu: false
}

const Header = ({onFilter}) => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  const onHandleSearch = ({target}) => {
    setSearch(target.value);
    onFilter();
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
    <>
      <HeaderContainer>
        <div>
          <Link to="/">
            <h1>Countries App</h1>
          </Link>
        </div>
        <div id="sr-cont">
            <SiElasticsearch id="sr-icon"/>
            <input id="searchbar" type="search" name="country-name" list="countriesList" placeholder="Country..." onChange={onHandleSearch}/>
            <DataList id="countriesList"/>
        </div>
      </HeaderContainer>
      <div id="sidebar">
        <Link to="/activity">
            <button id="btn-act">New Activity</button>
        </Link>
        <FiltersSelector onFilter={onFilter}/>
        <SortingForm registerClicks={registerClicks}/>
      </div>
    </>
  );
}

export default Header;
