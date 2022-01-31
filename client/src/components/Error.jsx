import React from 'react';
import { HiOutlineGlobe } from "react-icons/hi";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorStyled = styled.div`
  display: grid;
  height: 100%;
  place-items: center;

  h1 {
    font-weight: lighter;
    font-size: 4rem;
    font-family: 'Rubik Beastly', 'Courier New';
    color: gray;
    -webkit-text-stroke: 0.2rem black;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: black;
      transition: 300ms ease-in;

      :hover {
          transform: scale(1.1);
      }
    }

    .App-logo {
      font-size: 150px;
    }
  }
`

const Error = () => {
  return (
      <ErrorStyled>
        <div>
          <h1>Got lost??!!</h1>
          <Link to="/Countries">
            <HiOutlineGlobe className="App-logo"/>
          </Link>
        </div>
      </ErrorStyled>
  );
}

export default Error;
