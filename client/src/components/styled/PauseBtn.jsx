import React from 'react';
import styled from "styled-components";
import { IconContext } from "react-icons";
import { HiOutlineGlobe } from "react-icons/hi";

const IconBtn = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
    <IconContext.Provider value={{size: "5rem"}}>
        <HiOutlineGlobe id="world" className='App-logo'/>
      </IconContext.Provider>
    </button>
  );
}

const Pausebtn = styled(IconBtn)`
  display: block;
  position: absolute;
  top: 80%;
  width: 5rem;
  height: auto;
  background: transparent;
  border: hidden;
  border-radius: 50px;
  transition: 500ms ease;

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