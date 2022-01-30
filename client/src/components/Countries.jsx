import React, { useState, lazy, Suspense } from "react";
import { Outlet, useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import CoutriesContainer from "./styled/CountriesContainer";
import Header from "./subComponents/Header";
import styled from "styled-components";
const Pagination = lazy(() => import("./subComponents/Pagination"));
const CountryCard = lazy(() => import("./subComponents/CountryCard"));

function PreCountries ({className}) {
  const [currentPage, setCurrentPage] = useState(1)
  const { countries: totalCountries } = useSelector(state => state);
  const { code } = useParams();

  const iLastCountry = currentPage * 10, iFirstCountry = iLastCountry - 10;
  const countryToShow = totalCountries.filter(c => c.filtered === false);
  const countries = countryToShow.slice(iFirstCountry, iLastCountry);

  const handleOnFilter = () => {
    setCurrentPage(1);
  }

  return (
    <React.Fragment>
      { code ? <></> : 
      ( <div className={className}>
        <Header onFilter={handleOnFilter}/>
        <Suspense fallback={<h1>{`<--------------------------->`}</h1>}>
          <Pagination onPageChange={(n) => setCurrentPage(n)} numCountries={countryToShow.length} currentPage={currentPage}/>
        </Suspense>
        <CoutriesContainer>
        {countries.map(({ name, code, flagImg, continent, filtered }) => {
          return (  
            <Suspense key={code} fallback={<h1>...</h1>}>
              <Link to={`${code}`}>
                <CountryCard
                  name={name} 
                  code={code} 
                  flagImg={flagImg} 
                  continent={continent}
                  filtered={filtered}
                />
              </Link>
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


const Countries = styled(PreCountries)`
  width: 80%;
  padding: 2.5% 0;
  margin-left: 20%;

  a {
    text-decoration: none;
    color: black;
  }
`

export default Countries;