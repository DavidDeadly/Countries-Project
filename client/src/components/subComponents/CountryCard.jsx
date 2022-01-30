import React from 'react';
import StyledCountryCard from "../styled/StyledCountryCard.jsx"


const CountryCard = ({ name, flagImg, code, continent, filtered}) => {
  return (
      <StyledCountryCard filtered={filtered}>
            <img src={flagImg} alt={`Flag of ${name}`}/>
            <div className="ct-data">
              <h3>{name}</h3>
              <p>{code}</p>
              <p>{continent}</p>
            </div>
    </StyledCountryCard>
  );
}

export default CountryCard;
