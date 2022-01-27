import React from 'react';
import styled from 'styled-components';

const PagesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  max-width: max-content;
  margin: 25px auto;

  .cr-pg {
    background-color: blue;
  }

  button {
    padding: 10px;
    background-color: pink;
  }
`

const Pagination = ({numCountries, onPageChange, currentPage}) => {
  const numPages = Math.ceil(numCountries/10)
  const pages = [];
  for(let i = 1; i < numPages; i++) pages.push(i);

  const onHandlePageChange = (event, n) => {
    event.preventDefault();
    onPageChange(n);
  }
  
  return (
    <PagesList>
      { pages.map(n => (
        <button className={currentPage === n ? "cr-pg" : "pg-btn"} onClick={(e) => onHandlePageChange(e, n)} key={n}>
          <li>{n}</li>
        </button>
      )) }   
    </PagesList>
  );
}

export default Pagination;
