import React from 'react';
import { Link } from 'react-router-dom';
import StyledCountryCard from "../styled/StyledCountryCard.jsx"


const CountryCard = ({ name, flagImg, code, continent, filtered}) => {
  return (
      <StyledCountryCard filtered={filtered}>
        <Link to={`${code}`}>
            <img src={flagImg} alt={`Flag of ${name}`}/>
            <div className="ct-data">
              <h3>{name}</h3>
              <p>{code}</p>
              <p>{continent}</p>
            </div>
      </Link>
    </StyledCountryCard>
  );
}

export default CountryCard;
