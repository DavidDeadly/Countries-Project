import styled from 'styled-components';

import Button from '../reusable/Button';

const ButtonIn = styled(Button)`
  font-size: 2rem;
  padding: 0.625rem;
  background-color: gray;
  color: white;
  border-style: outset;
  border-width: 5px;
  border-color: black white white black;
  border-radius: 15px;
  animation: press ease-in-out 5s infinite; 

  
  @media (min-width: 950px) {
    :hover {
      cursor: pointer;
      border-color: white black black white;
      background-color: #d3d3d347;
      color: black;
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