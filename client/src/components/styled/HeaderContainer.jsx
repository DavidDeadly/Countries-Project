import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: auto;

  h1 {
    padding: 10px;
  }

  #head {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  #searchbar {
    width: 35vw;
  }
`

export default HeaderContainer;