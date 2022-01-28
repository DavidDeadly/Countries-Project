import styled from 'styled-components';

const ButtonIn = styled.button`
  font-size: 2rem;
  padding: 0.625rem;
  background-color: gray;
  color: white;
  border: 5px outset black;
  border-radius: 15px;
  animation: press ease-in-out 5s infinite; 
  transition: 300ms ease;
  
  
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