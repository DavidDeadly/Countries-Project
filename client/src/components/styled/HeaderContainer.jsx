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

  #inputs {
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
  }

  #searchbar {
    width: 35vw;
  }
`

export default HeaderContainer;