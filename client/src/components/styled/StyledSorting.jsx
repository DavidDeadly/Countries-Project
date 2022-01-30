import styled from "styled-components";

const StyledSorting = styled.div`  
  display: flex;
  flex-direction: column;
  text-align: center;

  & div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 0;
  }

  label {
    cursor: pointer;
    user-select: none;
    position: relative;
    font-style: italic;
    
    .st-input {
      position: absolute;
      top: 0.625rem;
      left: 8.75rem;
      cursor: pointer;
    }

    #alph,
    #popu {
      -webkit-appearance: none;
      appearance: none;
      color: currentColor;
      width: 1rem;
      height: 1rem;
      border: 2px solid currentColor;
      border-radius: 50%;
      transition: 300ms ease;

      :checked {
        background-color: gray;
        box-shadow: 0px 1px 4px 6px grey;
      }

      :hover {
        transform: scale(1.1);
      }

    }

    #desc {
      -webkit-appearance: none;
      appearance: none;
      top: 8px;
      width: 1rem;
      height: 1rem;
      color: currentColor;
      border: 2px solid currentColor;
      border-radius: 2px;
      transition: 500ms ease;

      :checked {
        background-color: gray;
        width: 2.5rem;
        box-shadow: 0px 1px 4px 6px grey;
      }

      :active {
        transform: translateX(-5px);
      }
      
      :hover {
        transform: scale(1.1);
      }
    }
  }
`

export default StyledSorting;