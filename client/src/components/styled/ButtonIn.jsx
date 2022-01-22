import styled from 'styled-components';

import Button from '../reusable/Button';

const ButtonIn = styled(Button)`
  font-size: 2rem;
  padding: 0.625rem;
  background-color: gray;
  color: white;
  border-style: outset;
  border-width: 5px;
  border-color: black;
  border-radius: 15px;
  animation: press ease-in-out 5s infinite; 
  transition: all .5s;
  
  
  @media (min-width: 750px) {
    :hover {
      cursor: pointer;
      background-color: transparent;
      transform: scale(1.1);
    }
  }

  @keyframes press {
    0% {
      color: white;
    }
    50% {
      color: black;
    }
    100% {
      color: white;
    }
  }

`

export default ButtonIn;