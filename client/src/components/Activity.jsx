import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { CgScrollV } from "react-icons/cg";
import axios from 'axios';
import $ from "jquery";

import StyledActivity from './styled/StyledActivity.jsx';
import { getCountries } from "../redux/actions/index.js";
import Coolbtn from "./styled/Coolbtn.jsx"
import CountryCard from "./subComponents/CountryCard.jsx";

const Activity = () => {
  const { countries, activities } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ activity, setActivity ] = useState({
    name: "", difficulty: 1, duration: 0, season: "Summer",
    countries: countries.map(c => c.code), sCountries: [], errors: []
  });

  const onHandleChange = ({target}) => {
    switch (target.name) {
      case "name":
        if(/^[a-z]|(\W|\d)/.test(target.value)) {
          target.className = "invalid";
          $("#ct-btn")[0].disabled = true;
          const error = [...activity.errors];
          error[0] = "Just letters and Capitalize";
          setActivity({...activity, errors: error})
          return;
        } else if (activities.find(a => a.name === target.value)) {
          target.className = "invalid";
          $("#ct-btn")[0].disabled = true;
          const error = [...activity.errors];
          error[0] = "That name already exist";
          setActivity({...activity, errors: error});
        }
        target.className = "valid";
        $("#ct-btn")[0].disabled = false;
        setActivity({...activity, name: target.value, errors: []});
        break;
      case "difficulty":
        setActivity({...activity, difficulty: target.value});
        break;
      case "duration":
        target.value >= 30 && target.value <= 360 ? 
        (() => {
          target.className = "valid";
          $("#ct-btn")[0].disabled = false;
          setActivity({...activity, duration: target.value, errors: []});
        })() 
        : (() => {
          target.className = "invalid";
          $("#ct-btn")[0].disabled = true;
          const error = [];
          error[1] = "Range 30 - 360";
          setActivity({...activity, errors: error});
        })()
        break;
      default:
        setActivity({...activity, season: target.value});
        break;
    }
  }

  const onHandleCountries = e => {
    const updatedCountries = [...e.target.selectedOptions].map(opt => opt.value)
    setActivity({
      ...activity,
      countries: updatedCountries,
      sCountries: countries.filter(c => updatedCountries.includes(c.code))
    });

  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const { name} = activity;
    activity.sCountries = [];
    activity.complete = false;
    if(name) {
      axios.post("http://localhost:3001/activity", activity)
        .then(res => alert(res.data))
        .catch(err => {
          alert("Coundn't create your Activity");
          console.error(err);
        });
      navigate("/countries");
    }
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <StyledActivity>
      <div id="form-cont"> 
        <h1>Create Activity</h1>
        <form onSubmit={onHandleSubmit}>
          <label className="main-lb" htmlFor="name">Name: {activity.errors[0]}</label>
            <input className="valid" type="text" name="name" placeholder='Activity Name' onChange={onHandleChange}/>
          <label className="main-lb" htmlFor="diff">Difficulty:  {activity.difficulty}</label>
            <input className="valid" type="range" name="difficulty" min={1} max={5} onChange={onHandleChange} value={activity.difficulty}/>
          <label className="main-lb" htmlFor="dur">Duration: {activity.errors[1]}</label>
            <input className="valid" type="number" name="duration" placeholder="In minutes" onChange={onHandleChange}/>
          <p className="main-lb">Season:</p>
          <div id="seasons">
            <label htmlFor="Summer">Summer
              <input type="radio" name="season" id="Summer" value="Summer" checked={activity.season === "Summer" ? true : false}onChange={onHandleChange}/>
            </label>
            <label htmlFor="Winter">Winter
              <input type="radio" name="season" id="Winter" value="Winter" onChange={onHandleChange}/>
            </label>
            <label htmlFor="Spring">Spring
              <input type="radio" name="season" id="Spring" value="Spring" onChange={onHandleChange} />
            </label>
            <label htmlFor="Autumn">Autumn
              <input type="radio" name="season" id="Autumn" value="Autumn" onChange={onHandleChange}/>
            </label>
          </div>
          <Coolbtn Legend="Create" id="ct-btn" pos="relative" bottom="3.125rem" left="11.25rem"/>
        </form>
      </div>
      <div id="container-cnts">
        <CgScrollV className="scroll-icon left" title="Scrollable"/>
        <Link to="/countries">
          <Coolbtn Legend="Countries" top="5%" left="30%"></Coolbtn>
        </Link>
        <select type="search" name="countries" id="countries" onChange={onHandleCountries} multiple size={50}>
          {countries && countries.sort(({ name:a },{ name:b } ) => a > b ? 1:-1).map(c => <option key={c.code} value={c.code}>{c.name}</option> )}
        </select>
      </div>
      <div id="flags-container">
        <h1>Chosen</h1>
        <CgScrollV className="scroll-icon right" title="Scrollable"/>
        <div id="flags">
          {activity.sCountries.map(c => {
            return <CountryCard key={c.code} name={c?.name} flagImg={c.flagImg} code={c.code} continent={c.continent}/>
          })}
        </div>
      </div>
    </StyledActivity>
  );
}

export default Activity;
