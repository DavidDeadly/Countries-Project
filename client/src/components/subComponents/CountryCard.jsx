import React from 'react';
import StyledCountryCard from "../styled/StyledCountryCard.jsx"

const CountryCard = ({ name, flagImg, code, continent, filtered  }) => {
  return (
    <StyledCountryCard filtered={filtered}>
      <h1>{name}</h1>
      <h3>{code}</h3>
      <img src={flagImg} alt={`Flag of ${name}`}/>
      <h2>{continent}</h2>
    </StyledCountryCard>
    
  );
}

export default CountryCard;
