import React, { useState, lazy, Suspense } from "react";
import { Outlet, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import CoutriesContainer from "./styled/CountriesContainer";
import Header from "./subComponents/Header";
import styled from "styled-components";
// import Pagination from "./subComponents/Pagination";
// import CountryCard from "./subComponents/CountryCard";
const Pagination = lazy(() => import("./subComponents/Pagination"));
const CountryCard = lazy(() => import("./subComponents/CountryCard"));

function PreCountries ({className}) {
  const [currentPage, setCurrentPage] = useState(1)
  const { countries: totalCountries } = useSelector(state => state);
  const { code } = useParams();

  const iLastCountry = currentPage * 10, iFirstCountry = iLastCountry - 10;
  const countryToShow = totalCountries.filter(c => c.filtered === false);
  const countries = countryToShow.slice(iFirstCountry, iLastCountry);

  const handleOnFilter = (e) => {
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


const Countries = styled(PreCountries)`
  background-color: red;
  width: 80%;
  margin-left: 20%;

  #sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 20%;
    background-color: lightblue;
    font-size: 1.5rem;

    #btn-act {
      font-size: 1.5rem;
      padding: 5px;
      height: 80%;
      color: black;
      border: 5px gray solid;
      background-color: transparent;

      :hover {
        cursor: pointer;
        background-color: gray;
        color: white;
      }
    }

    #filters {
      display: flex;
      flex-direction: column-reverse;
      text-align: center;

      div {
        margin-top: 1rem;
      }

      #continents,
      #activities {
        width: 50%;
        overflow-y: auto;
        text-align: center;
      }
    }

    #sort {
      display: flex;
      flex-direction: column;
      text-align: center;

      & div:first-of-type {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 1rem 0;
      }

      .st-input {
        margin-left: .5rem;
      }
    }

  }
  
`

export default Countries;