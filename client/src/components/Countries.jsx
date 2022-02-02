import React, { useState, useEffect, lazy, Suspense } from "react";
import { Outlet, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import CoutriesContainer from "./styled/CountriesContainer";
import Header from "./subComponents/Header";
import styled from "styled-components";
import PaginationPlaceholder from "./styled/PaginationPlaceholder.jsx";
import CountryCardPlaceholder from "./styled/CountryCardPlaceholder.jsx";
import { getDetailed } from "../redux/actions";
const Pagination = lazy(() => import("./subComponents/Pagination"));
const CountryCard = lazy(() => import("./subComponents/CountryCard"));

function PreCountries ({className}) {
  const [currentPage, setCurrentPage] = useState(1)
  const { countries: totalCountries } = useSelector(state => state);
  const { code } = useParams();
  const dispatch = useDispatch();

  const iLastCountry = currentPage * 10, iFirstCountry = iLastCountry - 10;
  const countryToShow = totalCountries.filter(c => c.filtered === false);
  const countries = countryToShow.slice(iFirstCountry, iLastCountry);

  const handleOnFilter = () => {
    setCurrentPage(1);
  }

  useEffect(() => {
    dispatch(getDetailed(code));
  }, [dispatch, code]);

  return (
    <React.Fragment>
      { code ? <></> : 
      ( <div className={className}>
        <Header onFilter={handleOnFilter}/>
        <Suspense fallback={<PaginationPlaceholder/>}>
          <Pagination onPageChange={(n) => setCurrentPage(n)} numCountries={countryToShow.length} currentPage={currentPage}/>
        </Suspense>
        <CoutriesContainer>
        {countries.map(({ name, code, flagImg, continent, filtered }, i) => {
          return (  
            <Suspense key={code} fallback={<CountryCardPlaceholder/>}>
              <Link to={`${code}`}>
                <CountryCard
                  id={i === countries.length-1 ? "last" : null}
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