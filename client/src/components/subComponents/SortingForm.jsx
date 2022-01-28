import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { countriesSort } from "../../redux/actions/index.js";

const SortingForm = ({registerClicks}) => {
  const [ sortingRules, setSortingRules ] = useState({});
  const dispatch = useDispatch();

  const onHandleParam = ({target}) => {
    if(registerClicks[target.id]) {
      registerClicks[target.id] = false;
      target.checked = false;
      return
    } else registerClicks[target.id] = true;
    if(target.checked) setSortingRules({...sortingRules, param: target.value})
    else setSortingRules({...sortingRules, param: null});
  }

  const onHandleDesc = ({target}) => {
    if(target.checked) setSortingRules({...sortingRules, desc: target.value})
    else setSortingRules({...sortingRules, desc: null})
  }


  useEffect(() => {
    dispatch(countriesSort(sortingRules));
  }, [dispatch, sortingRules]);

  return (
    <div id="sort">
      <h3>Sort By</h3>
      <div>
        <label htmlFor="alph">
          Name:
          <input className="st-input" type="radio" name="param" id="alph" value="name" onClick={onHandleParam}/>
        </label>
        <label htmlFor="popu">
          Population:
          <input className="st-input" type="radio" name="param" id="popu" value="population"onClick={onHandleParam}/>
        </label>
      </div>
      <div>
        <label htmlFor="desc">
          Descendant:
          <input className="st-input" type="checkbox" name="desc" id="desc" onClick={onHandleDesc}/>
        </label>
      </div>
    </div>
  );
}

export default SortingForm;
