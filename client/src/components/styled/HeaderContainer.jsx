import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: auto;

  div:first-of-type {
    margin: auto;
    width: fit-content;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    margin: 10px;
    font-weight: lighter;
    font-size: 4rem;
    font-family: 'Rubik Beastly', 'Courier New';
    color: gray;
    -webkit-text-stroke: 0.2rem black;
    transition: 300ms transform ease;

    :hover {
      transform: scale(1.025);
    }
  }

  #sr-cont {
    position: relative;
    width: 50%;
    margin: auto;

    #sr-icon {
      position: absolute;
      top: 7px;
      left: 8px;
    }

    #searchbar {
      width: 100%;
      height: 30px;
      border: 3px double black;
      font-size: 1.2rem;
      font-style: oblique;
      border-radius: 15px;
      padding: 2px 0 2px 25px;
      outline: 0;
      background-color: rgba(255, 255, 255, .5);
      transition: 250ms ease-in-out;

      :hover, :focus {
        border-style: solid;
        background-color: white;
      }
    }
  }
`

export default HeaderContainer;