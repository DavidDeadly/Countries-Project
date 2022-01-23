import React from "react";
import { Outlet, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import CountryCard from "./subComponents/CountryCard";
import CoutriesContainer from "./styled/CountriesContainer";
import Header from "./subComponents/Header";

export default function Countries () {
  const countries = useSelector(state => state.countries);
  const querySearch = useSelector(state => state.querySearch);
  const { id } = useParams();
  
  return (
    <React.Fragment>
      { id ? <></> : 
      ( <div>
        <Header></Header>
        <CoutriesContainer>
        {querySearch.length ? querySearch.map((name, code, flagImg, continent, filtered) => { return (
          <CountryCard 
          key={code}
          name={name} 
          code={code} 
          flagImg={flagImg} 
          continent={continent}
          filtered={filtered}
        />
        )})
        :countries.map(({ name, code, flagImg, continent, filtered }) => {
          return (
            <CountryCard 
              key={code}
              name={name} 
              code={code} 
              flagImg={flagImg} 
              continent={continent}
              filtered={filtered}
            />
          )
        })}
        </CoutriesContainer>
      </div>)
      }
      <Outlet/>
    </React.Fragment>
  );
};