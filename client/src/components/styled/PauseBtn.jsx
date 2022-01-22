import React from 'react';
import styled from "styled-components";
import Button from "../reusable/Button";
import { IconContext } from "react-icons";
import { HiOutlineGlobe } from "react-icons/hi";

const PrePausebtn = ({ className, onClick }) => {
  
  const iconStyles = {
    height: "10x",
    size: "10x",
  }

  return (
    <Button className={className} legend={
      <IconContext.Provider value={iconStyles}>
        <HiOutlineGlobe id="world" className='App-logo'/>
      </IconContext.Provider>
  } onClick={onClick}/>
  );
}

const Pausebtn = styled(PrePausebtn)`

  display: block;
  position: absolute;
  top: 80%;
  width: 5rem;
  height: auto;
  background: transparent;
  border: hidden;
  border-radius: 50px;
  transition: all .5s;

  @media (max-width: 750px) {
    display: none;
  }

  @media (min-width: 750px) {
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`

export default Pausebtn;