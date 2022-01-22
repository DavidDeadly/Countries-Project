import React, { useRef, useEffect, useCallback } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import $ from "jquery";

import ButtonIn from './styled/ButtonIn';
import img from "../assets/static-gray-world-map.png";
import vid from "../assets/gray-world-map.mp4";
import Pausebtn from './styled/PauseBtn';

const PreHome = ({ className }) => {
  const video = useRef();

  const pp = useCallback(
    (event, { current: vid}) => {
      event.preventDefault();
      const world = $("#world");
      vid.paused ? (() => {
        vid.play()
        //How to unfocus the pause button right after the video starts rolling
        // First option: altering css;
        // $(".ps-btn").css("outline-style", "none");

        // Final option: default activeElement getter and its blur method;
        document.activeElement.blur();

        // Second option: jQuery blur... deprecated;
        // $(".ps-btn").blur();
        world.css("animation-play-state", "running");
      })() : (() => {
        vid.pause();
        // First option: reverting the altering;
        // $(".ps-btn").css("outline-style", "dotted");
        world.css("animation-play-state", "paused");
      })();
    }, []);

  useEffect(() => {
    const handleKeyUp = e => {
      if (e.code === "Space" || e.code === "Enter") pp(e, video);
    }; 

    window.addEventListener("keyup", handleKeyUp);
    
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [pp]);

  return (
    <div className={className}>
      <video id="bg-video" autoPlay loop muted poster={img} ref={video}>
        <source src={vid}/>
      </video>
      <div>
        <h1 data-text="Countries App">Countries App</h1>
        <Link to="/countries">
          <ButtonIn legend="Hello World!"/>
        </Link>
        <Pausebtn className="ps-btn" onClick={(e) =>  pp(e, video)}/>
      </div>
    </div>
  );
}

const Home = styled(PreHome)`
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
      -webkit-text-stroke: 3px black;
      
      ::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: gray;
        -webkit-text-stroke: 0px gray;
        border-right: 2px solid white;
        overflow: hidden;
        animation: 5s ease-in-out 1 writting;
      }
    }
  }

  @keyframes writting {
    0%, 10%, 95% {
      width: 0;
    }
    70%, 100% {
      width: 70%;
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

        ::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: gray;
          -webkit-text-stroke: 0px gray;
          overflow: hidden;
          animation: 5s linear 1 fulfilling;
        }

        @keyframes fulfilling {
          0%, 10%, 100% {
            height: 100%;
          }
          70%, 90% {
            height: 0%;
          }
        }
      }
    }
  }

  @media (min-width: 950px) {
    button:focus {
        outline-offset: 12px;
        outline: 5px dotted black;
      }
  }
`

export default Home;
