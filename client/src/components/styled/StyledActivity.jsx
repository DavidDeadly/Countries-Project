import styled from "styled-components";

const StyledActivity = styled.div`
  position: relative;
  height: 100%;

  h1 {
    margin: 10px;
    font-weight: bolder;
    font-size: 2em;
    -webkit-text-stroke: 1px white;
  }

  #form-cont {
    width: 35%;
    height: 100%;
    margin: auto;
    text-align: center;
    padding: 2.5rem;
    background: rgb(255, 255, 255, 0.4);
    background: radial-gradient(circle,rgba(255,255,255,0.500437675070028) 25%,rgba(0,0,0,0.4948354341736695) 75%);
    font-size: 20px;
    position: relative;

    form {
      display: flex;
      height: 70%;
      flex-direction: column;
      justify-content: space-between;

      .main-lb {
        font-style: italic;
        font-weight: bold;
        user-select: none;
      }

      .valid, 
      .invalid {
        margin: auto;
        width: 50%;
        padding: 10px;
        transition: 100ms ease;
        transition-property: outline, outline-offset;
        border-radius: 10px;
        border: none;
        background-color: rgba(255,255,255, .6);
        text-align: center;
        font-style: italic;
        font-weight: bold;

        :focus {
          outline: black solid 2px;
        }
      }

      .invalid {
        outline: #b60e0ea1 solid 2px;
        outline-offset: none;
        
        :focus {
          outline-offset: 2px;
          outline: #b60e0ea1 solid 2px;
        }
      }

      input[type="range"] {
        user-select: none;
        -webkit-appearance: none;
        appearance: none;
        
        ::-webkit-slider-runnable-track {
          width: 100%;
          cursor: pointer;
          height: 100%;
          background-color: black;
          border-radius: 15px;
        }
        
        ::-webkit-slider-thumb {
          -webkit-appearance: none;
          border: 2px solid black;
          border-radius: 15px;
          background-color: gray;
          height: 20px;
          width: 20px;
          cursor: pointer;
          transition: 250ms ease;
        }

        :focus {
          ::-webkit-slider-thumb {
            border-color: white;
            box-shadow: 0px 0px 80px 50px white;
            background-color: white;
          }
        }
      }

      #seasons {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 3.125rem;

        input {
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
          color: rgba(255,255,255, .4);
          width: 1rem;
          height: 1rem;
          border: 2px solid black;
          border-radius: 10%;
          margin-left: 10px;
          transition: 300ms ease;

          :checked {
            background-color: white;
            border-radius: 50%;
          }

          :focus {
            box-shadow: 0px 0px 80px 50px white;
            background-color: white;
            outline: none;
          }

          :hover {
            transform: scale(1.1);
          }

        }
      }

      #ct-btn {
        
        :disabled {
          background-color: gray;
          cursor: default;

          :hover {
            color: black;
            box-shadow: 0px 10px 80px 40px #b60e0ea1;
          }
        }
      }
    }
  }

  .scroll-icon {
    position: absolute;
    top: 44.5%;
    font-size: 50px;
  }

  .left {
    right: -2%;
  }
  .right {
    left: -3.5%;
  }

  #container-cnts {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    margin-left: 55px;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: center;
    justify-content: center;

    label {
      font-size: 2rem;
      font-style: italic;
      font-weight: bold;
    }
    
    #countries {
      font-size: 1rem;
      text-align: center;
      margin: 5% 8%;
      max-height: 70%;
      border-radius: 10px;
      background-color: transparent;
      
      :focus {
        outline: none;
      }

      ::-webkit-scrollbar {
        display: none;
      }

      option {
        border: 1px solid rgba(255,255,255,.2);
        font-style: italic;
        color: black;
        padding: 2px;

        :checked, :focus {
          color: white;
          background-color: black;
        }
      }

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  #flags-container {
    position: absolute;
    right: 0;
    top: 0;
    margin: 55px;
    background-color: transparent;
    min-width: 330px;
    height: 80%;
    border: 2px solid rgba(255,255,255, .4);
    border-radius: 10px;
    text-align: center;
    
    #flags {
      display: flex;
      flex-direction: column;
      max-height: 70%;
      margin: 5% 8%;
      max-height: 80%;
      overflow-y: auto;

      ::-webkit-scrollbar {
        display: none;
      }
    }

  }

`;

export default StyledActivity;