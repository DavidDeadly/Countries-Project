import React from 'react';
import { useSelector } from 'react-redux';

const Datalist = ({id}) => {
  const countries = useSelector(state => state.countries);
  return (
    <datalist id={id}>
      {countries.filter(c => c.filtered === false)
        .map(({ name }, i)=> <option key={i} value={name}/> 
      )}
    </datalist>
  );
}

export default Datalist;
