import React, { useState } from "react";
import { Outlet, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import CoutriesContainer from "./styled/CountriesContainer";
import Header from "./subComponents/Header";
import Pagination from "./subComponents/Pagination";
import CountryCard from "./subComponents/CountryCard";

export default function Countries () {
  const [currentPage, setCurrentPage] = useState(1)
  const { countries: totalCountries } = useSelector(state => state);
  const { code } = useParams();

  const iLastCountry = currentPage * 10, iFirstCountry = iLastCountry - 10;
  const countryToShow = totalCountries.filter(c => c.filtered === false);
  const countries = countryToShow.slice(iFirstCountry, iLastCountry);

  const handleOnFilter = (e) => {
    console.log(e);
    setCurrentPage(1);
  }

  return (
    <React.Fragment>
      { code ? <></> : 
      ( <div>
        <Header onFilter={handleOnFilter}/>
        <Pagination onPageChange={(n) => setCurrentPage(n)} numCountries={countryToShow.length}/>
        <CoutriesContainer>
        {countries.map(({ name, code, flagImg, continent, filtered }) => {
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