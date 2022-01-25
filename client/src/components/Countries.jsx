import React, { useState, Suspense, lazy } from "react";
import { Outlet, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import CoutriesContainer from "./styled/CountriesContainer";
import Header from "./subComponents/Header";
import Pagination from "./subComponents/pagination";
const CountryCard = lazy(() => import("./subComponents/CountryCard.jsx"));

export default function Countries () {
  const [currentPage, setCurrentPage] = useState(1)
  const totalCountries = useSelector(state => state.countries);
  const { code } = useParams();

  const iLastCountry = currentPage * 10, iFirstCountry = iLastCountry - 10;
  const countryToShow = totalCountries.filter(c => c.filtered === false);
  const countries = countryToShow.slice(iFirstCountry, iLastCountry);
  
  console.log(code);
  return (
    <React.Fragment>
      { code ? <></> : 
      ( <div>
        <Header></Header>
        <Pagination onPageChange={(n) => setCurrentPage(n)} numCountries={countryToShow.length}/>
        <CoutriesContainer>
        {countries.map(({ name, code, flagImg, continent, filtered }) => {
          return (             
            <Suspense fallback={<h1>...</h1>} key={code}>
              <CountryCard
                name={name} 
                code={code} 
                flagImg={flagImg} 
                continent={continent}
                filtered={filtered}
              />
            </Suspense>
          )
        })}
        </CoutriesContainer>
      </div>)
      }
      <Outlet/>
    </React.Fragment>
  );
};