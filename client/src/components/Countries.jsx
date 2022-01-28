import React, { useState, lazy, Suspense } from "react";
import { Outlet, useParams } from 'react-router-dom';
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
  width: 80%;
  padding: 2.5% 0;
  margin-left: 20%;

  #sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 20%;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 1.5rem;

    #btn-act {
      position: absolute;
      top: 20px;
      right: 45px;
      font-size: 1.5rem;
      padding: 10px;
      color: black;
      letter-spacing: 1.5px;
      border: none;
      border-radius: 15px;
      outline: none;
      background-color: white;
      transition: 250ms ease;

      :hover {
        cursor: pointer;
        background-color: black;
        color: white;
        box-shadow: 0px 10px 80px 40px white;
        transform: translateY(5px);
      }

      :active {
        transform: translateY(10px);
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
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        width: 80%;
        font-size: 1.2rem;
        overflow-y: hidden;
        cursor: pointer;
        text-align: center;
        background-color: inherit;
        border-width: 4px 2px 0;
        border-style: outset;
        border-color: gray;
        transition: 300ms transform ease;

        &:hover {
          transform: translateX(5px);
        }

        option {
          font-style: italic;
          color: black;

          :checked {
            color: white;
            background-color: black;
          }
        }
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

      label {
        cursor: pointer;
        user-select: none;
        position: relative;
        
        .st-input {
          position: absolute;
          top: 0.625rem;
          left: 8.75rem;
          cursor: pointer;
        }

        #alph,
        #popu {
          -webkit-appearance: none;
          appearance: none;
          color: currentColor;
          width: 1rem;
          height: 1rem;
          border: 2px solid currentColor;
          border-radius: 50%;
          transition: 300ms ease;

          :checked {
            background-color: gray;
            box-shadow: 0px 1px 4px 6px grey;
          }

          :hover {
            transform: scale(1.1);
          }

        }

        #desc {
          -webkit-appearance: none;
          appearance: none;
          top: 8px;
          width: 1rem;
          height: 1rem;
          color: currentColor;
          border: 2px solid currentColor;
          border-radius: 2px;
          transition: 500ms ease;

          :checked {
            background-color: gray;
            width: 2.5rem;
            box-shadow: 0px 1px 4px 6px grey;
          }
  
          :active {
            transform: translateX(-5px);
          }
          
          :hover {
            transform: rotate(180deg);
          }
        }
      }
    }

  }
`

export default Countries;