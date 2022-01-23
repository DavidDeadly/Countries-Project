import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 20px 0px;
  width: 100%;
  height: auto;

  h1 {
    padding: 10px;
  }

  .sort {
    display: flex;
    flex-direction: column;

    & div:first-of-type {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 1rem 0;
    }
  }

  #inputs {
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
    align-items: center;
  }

  #searchbar {
    width: 35vw;
  }

  #continents {
    width: 80%;
    overflow-y: auto;
    text-align: center;

  }
`

export default HeaderContainer;