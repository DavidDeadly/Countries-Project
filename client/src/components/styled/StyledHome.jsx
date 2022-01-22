import styled from "styled-components";

import img from "../../assets/static-gray-world-map.png";

const StyledHome = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    text-align: center;
    height: 12rem;

    h1 {
      position: relative;
      font-size: 4rem;
      font-weight: lighter;
      font-family: 'Rubik Beastly', 'Courier New';
      color: transparent;
      -webkit-text-stroke: 0.2rem black;
      
      ::before {
        content: attr(data-text);
        position: absolute;
        width: 100%;
        height: 100%;
        color: gray;
        -webkit-text-stroke: 0px gray;
        border: none;
        overflow: hidden;
        animation: 4s ease-in-out 1 writting;
      }
    }
  }

  @keyframes writting {
    0%, 10%, 95% {
      width: 0%;
      border-right: 2px solid white;
    }
    70%, 100% {
      width: 70%;
      border-right: 2px solid white;
    }
  }

  button:focus {
    outline: none;
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

    background: url(${img}) no-repeat center;
    background-size: cover;

    div {
      height: 60%;
      justify-content: center;

      h1 {
        position: relative;
        bottom: 10rem;
        color: transparent;
        -webkit-text-stroke: 0px transparent;

        ::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: gray;
          -webkit-text-stroke: 0.15rem black;
          border: none;
          overflow: hidden;
          animation: 2s linear 1 fulfilling;
        }

        @keyframes fulfilling {
          from {
            height: 0%;
            border-bottom: gray 2px solid;
          }
          to {
            height: 100%;
            border-bottom: gray 2px solid;
          }
        }
      }
    }
  }

  @media (min-width: 750px) {
    button:focus {
        outline-offset: 12px;
        outline: 5px dotted black;
      }
  }
`

export default StyledHome;
