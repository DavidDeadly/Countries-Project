import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import $ from "jquery";

import StyledCountry from "./styled/StyledCountry.jsx";
import Coolbtn from "./styled/Coolbtn.jsx";
import CountryCard from './subComponents/CountryCard.jsx';
import Loadingpage from "./LoadingPage.jsx";

const CountryDetailed = () => {
  const country = useSelector(state => state.country);

  const activityShow = (e) => {
    const activityData = $(`#${e.target.id.toUpperCase()}`);
    const actTitle = $("#act-tl");
    setTimeout(() => {
      actTitle.text("Activity");
    }, 300);
    actTitle.css("transform", "translateY(-60px)");
    activityData.css("z-index", "1");
    activityData.css("opacity", "1");
  }
  
  const activityDisappear = (e) => {
    const activityData = $(`#${e.target.parentElement.id}`);
    const actTitle = $("#act-tl");
    actTitle.text("Activities");
    activityData.css("opacity", "0");
    activityData.css("z-index", "-1");
    actTitle.css("transform", "rotate(45deg)");
  }

  return (
    <>
      { !country ? <Loadingpage/>
        : <StyledCountry>
            <Link to="/countries">
              <Coolbtn Legend="Countries" top="8%" left="5%"></Coolbtn>
            </Link>
            <div id="cnt-img">
              <CountryCard name={country?.name} flagImg={country?.flagImg} code={country?.code} continent={country?.continent} fontSize="1.2em"/>
            </div>
            <div id="main">
              <div className="data" id="basic">
                <h1 className="title" id="data-tl">Data</h1>
                <p className="capital">{country?.capital}</p>
                <p>Population: <span>{country?.population.toLocaleString("es")}</span></p>
                <p>Area: <span>{`${country?.area.toLocaleString("es")} km\u00B2`}</span></p>
                <p className="region">{country?.subregion}</p>
              </div>
              <ul className="data" id="activities" style={{
                display: country?.activities.length ? "flex" : "none",
              }}>
                <h1 className="title" id="act-tl" data="Activity">Activities</h1>
                {country?.activities?.map(a => {
                  return (
                  <React.Fragment key={a.id}>
                    <div className="act-info" id={a.name.toUpperCase()}>
                      <button onClick={activityDisappear}>X</button>
                      <h2>{a.name}</h2>
                      <p>Difficulty: <span>{a.difficulty}</span></p>
                      <p>Duration: <span>{a.duration} minutes</span></p>
                      <p>Season: <span>{a.season}</span></p>
                    </div>
                    <li key={a.id} className="act-names" id={a.name} onClick={activityShow}>{a.name}</li> 
                  </React.Fragment>
                )})}
              </ul>
            </div>
        </StyledCountry>
      }
    </>
  );
}

export default CountryDetailed;
