import React from 'react';
import styled from "styled-components";


const btn = ({className, Legend, id}) => {
  return (
    <button id={id} className={className}>{Legend}</button>
  );
}

const Coolbtn = styled(btn)`
  position: absolute;
  top: ${(props) => props.top && props.top};
  left: ${(props) => props.left && props.left};
  right: ${(props) => props.right && props.right};
  bottom: ${(props) => props.bottom && props.bottom};
  font-size: 1.5rem;
  padding: 10px;
  color: black;
  letter-spacing: 1.5px;
  border: none;
  border-radius: 15px;
  outline: none;
  background-color: white;
  transition: 250ms ease, 50ms outline ease;

  :hover {
    cursor: pointer;
    background-color: black;
    color: white;
    box-shadow: 0px 10px 80px 40px white;
    transform: translateY(5px);
  }

  :active {
    transform: translateY(10px);
  }

  :focus {
    outline: 2px solid black;
  }
`

export default Coolbtn;

