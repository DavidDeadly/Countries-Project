import React from 'react';
import { Link } from 'react-router-dom';
import StyledCountryCard from "../styled/StyledCountryCard.jsx"


const CountryCard = ({ name, flagImg, code, continent, filtered}) => {
  return (
      <StyledCountryCard filtered={filtered}>
        <Link to={`${code}`}>
          <h1>{name}</h1>
          <h3>{code}</h3>
          <img src={flagImg} alt={`Flag of ${name}`}/>
          <h2>{continent}</h2>
        </Link>
      </StyledCountryCard>
  );
}

export default CountryCard;
