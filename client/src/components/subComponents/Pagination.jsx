import React from 'react';
import styled from 'styled-components';

const PagesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  max-width: max-content;
  margin: 25px auto;
  border: 3px solid black;
  border-radius: 5px;
  transition: 300ms transform ease;

  &:hover {
    transform: scale(1.01);
  }
  
  button {
    padding: 8px;
    width: max-content;
    border: none;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, .6);
    transition: 300ms ease;

    :hover {
      cursor: pointer;
      background-color: gray;
    }

    :active {
      transform: translateY(5px);
    }
  }

  .cr-pg {
    background-color: black;
    color: white;
  }

`

const Pagination = ({numCountries, onPageChange, currentPage}) => {
  const numPages = Math.ceil(numCountries/10);
  const pages = [];
  for(let i = 1; i <= numPages; i++) pages.push(i);

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
