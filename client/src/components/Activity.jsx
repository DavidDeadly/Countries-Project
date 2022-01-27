import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { getCountries } from "../redux/actions/index.js";

const Activity = () => {
  const { countries, activities } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ activity, setActivity ] = useState({
    name: "", difficulty: 1, duration: 0, season: null,
    countries: countries.map(c => c.code), sCountries: [], complete: false
  });

  const onHandleChange = ({target}) => {
    switch (target.name) {
      case "name":
        if(/^[a-z]|(\W|\d)/.test(target.value)) {
          console.warn("The activity name must start with a capital letter and have only alphanumeric Characters"); return;
        } else if (activities.find(a => a.name === target.value)) {
          console.warn("That name already exist");
        }
        setActivity({...activity, name: target.value});
        break;
      case "difficulty":
        setActivity({...activity, difficulty: target.value});
        break;
      case "duration":
        target.value >= 30 && target.value <= 120 && setActivity({...activity, duration: target.value});
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
        .then(res => alert(res.data));
      navigate("/countries");
    }
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Create Activity</h1>
      <div style={{display:"flex"}}>{activity.sCountries.map(c => {
        return <img key={c.code} src={c.flagImg} alt={`${c.name} flag`} />
      })}</div>
      <form onSubmit={onHandleSubmit} style={{display:"flex", flexDirection:"column", alignItems:'center', width:"100%"}}>
        <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" placeholder='Activity Name' onChange={onHandleChange}/>
        <label htmlFor="diff">Difficulty:{activity.difficulty}</label>
          <input id="diff" type="range" name="difficulty" min={1} max={5} onChange={onHandleChange} value={activity.difficulty}/>
        <label htmlFor="dur">Duration:</label>
          <input id="dur" type="number" name="duration" placeholder="In minutes" onChange={onHandleChange} min="30" max="120"/>
        <h3>Season:</h3>
        <div style={{display:"flex", gap: "10px"}}>
          <label htmlFor="Verano">Verano
            <input type="radio" name="season" id="Verano" value="Verano"  onChange={onHandleChange}/>
          </label>
          <label htmlFor="Invierno">Invierno
            <input type="radio" name="season" id="Invierno" value="Invierno" onChange={onHandleChange}/>
          </label>
          <label htmlFor="Primavera">Primavera
            <input type="radio" name="season" id="Primavera" value="Primavera" onChange={onHandleChange} />
          </label>
          <label htmlFor="Otoño">Otoño
            <input type="radio" name="season" id="sOtoñoeason" value="Otoño" onChange={onHandleChange}/>
          </label>
        </div>
        <label htmlFor="countries">Countries:</label>
        <select type="search" name="countries" id="countries" onChange={onHandleCountries} multiple size={50}>
          {countries && countries.sort(({ name:a },{ name:b } ) => a > b ? 1:-1).map(c => <option key={c.code} value={c.code}>{c.name}</option> )}
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Activity;
