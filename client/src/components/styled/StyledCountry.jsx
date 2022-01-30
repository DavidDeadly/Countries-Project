import styled from "styled-components";

const StyledCountry = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 2%;

  #cnt-img {
    width: 25%;
    margin: auto;
    margin-bottom: 2%;
  }

  #main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;

    .data, 
    .act-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      font-size: 1.5rem;
      gap: 10%;
      width: 25%;
      height: 19.062rem;
      background-color: rgba(255,255,255, 0.4);
      position: relative;
    }

    .data {
      .capital, .region {
        font-size: 1.5em;
        font-style: italic;
        font-weight: bold;
      }

      p span {
        font-size: .8em;
        font-family: monospace;
        font-style: italic;
      }

      .title {
        font-size: 3rem;
        position: absolute;
        top: 0;
        color: transparent;
        -webkit-text-stroke: 2px black;
      }

      #data-tl {
        top: -10px;
        right: 75%;
        transform: rotate(-45deg);
      }

      #act-tl {
        left: 60%;
        transform: rotate(45deg);
        transition: 500ms transform ease-out;
      }
    }

    #activities {
      list-style-type: none;
      font-size: 2.5rem;
      font-weight: bold;

      li {
        cursor: pointer;
        user-select: none;
        transition: 250ms transform ease;

        :hover {
          transform: scale(1.1);
        }
      }

      .act-info {
        position: absolute;
        inset: 0;
        width: 100%;
        background-color: black;
        padding: 15px;
        color: white;
        z-index: -1;
        opacity: 0;
        transition: 250ms ease-in-out;
        transition-property: z-index, opacity;

        button {
          font-size: 1.2rem;
          position: absolute;
          top: 5%;
          right: 8%;
          padding: 5px;
          cursor: pointer;
          border: 2px solid black;
          border-radius: 5px;
          background-color: white;
          transition: 300ms ease;
          transition-property: border-color, background-color, color;

          :hover {
            background-color: black;
            color: white;
            border-color: white;
          }
        }
      }
    }
  }


`

export default StyledCountry;