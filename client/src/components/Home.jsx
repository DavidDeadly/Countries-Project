import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import ButtonIn from './styled/ButtonIn';
import img from "../assets/static-gray-world-map.png";
import vid from "../assets/gray-world-map.mp4";

const preHome = ({ className }) => {
  return (
    <div className={className}>
      <video id="bg-video" loop autoPlay muted poster={img}>
        <source src={vid}/>
      </video>
      <div>
        <h1>Countries App</h1>
        <Link to="/countries">
          <ButtonIn legend="Hello World!" backgroundColor="gray"/>
        </Link>
      </div>
    </div>
  );
}

const Home = styled(preHome)`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: max-content;
    height: 8rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: lighter;
    font-family: 'Rubik Beastly', cursive;
  }

  #bg-video {
    position: absolute;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media (max-width: 750px) {
    #bg-video {
      display: none;
    }

    background: url(${img}) no-repeat center fixed;
    background-size: cover;
  }
`

export default Home;
