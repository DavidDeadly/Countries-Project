import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import HeaderContainer from '../styled/HeaderContainer.jsx';
import ContinentsSelector from './ContinentsSelector.jsx';
import DataList from './DataList.jsx';
import SortingForm from './SortingForm.jsx';
import { querySearch } from '../../redux/actions/index.js';

const Header = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  const onHandleSearch = ({target}) => {
    setSearch(target.value);
  }

  useEffect(() => {
    dispatch(querySearch(search));
  }, [dispatch, search])
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Countries App</h1>
      </Link>
      <div id="inputs">
        <div>
          <label htmlFor="searchbar">Search Bar</label>
          <input id="searchbar" type="search" name="country-name" list="countriesList" placeholder="search por a country" onChange={onHandleSearch}/>
          <DataList id="countriesList"/>
        </div>
        <ContinentsSelector/>
        <SortingForm/>
      </div>
    </HeaderContainer>
  );
}

export default Header;
