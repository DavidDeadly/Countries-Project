import styled from "styled-components";

const StyledFilters = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;

  div {
    margin-top: 1rem;
  }

  #continents,
  #activities {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    width: 80%;
    font-size: 1.2rem;
    overflow-y: hidden;
    cursor: pointer;
    text-align: center;
    background-color: inherit;
    border-width: 4px 2px 0;
    border-style: outset;
    border-color: gray;
    transition: 300ms transform ease;

    &:hover {
      transform: translateX(5px);
    }

    option {
      font-style: italic;
      color: black;

      :checked {
        color: white;
        background-color: black;
      }
    }

    :disabled {
      border: none;
      background-color: gray;
      cursor: default;

      :hover {
        transform: translate(0);
      }
    }
  }
`

export default StyledFilters;