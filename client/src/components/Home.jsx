import React, { useRef, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import $ from "jquery";

import img from "../assets/static-gray-world-map.png";
import vid from "../assets/gray-world-map.mp4";
import ButtonIn from './styled/ButtonIn';
import Pausebtn from './styled/PauseBtn';
import StyledHome from "./styled/StyledHome.jsx";

const Home = () => {
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
    <StyledHome>
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
    </StyledHome>
  );
};

export default Home;