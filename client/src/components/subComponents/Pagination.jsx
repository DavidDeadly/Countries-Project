import React from 'react';
import styled from 'styled-components';

const PagesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  max-width: max-content;
  margin: 25px auto;

  li {
    padding: 10px;
    background-color: pink;
  }
`

const Pagination = ({numCountries, onPageChange}) => {
  const numPages = Math.ceil(numCountries/10)
  const pages = [];
  for(let i = 1; i < numPages; i++) pages.push(i);
  
  return (
    <PagesList>
      { pages.map(n => (
        <button onClick={() => onPageChange(n)} key={n}>
          <li>{n}</li>
        </button>
      )) }   
    </PagesList>
  );
}

export default Pagination;
