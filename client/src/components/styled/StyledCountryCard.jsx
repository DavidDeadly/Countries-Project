import styled from "styled-components";

const StyledCountryCard = styled.div`
  display: ${props => props.filtered ? "none" : "flex"};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: gray;
  width: 100%;
  height: auto;

  a {
    text-decoration: none;
    color: black;
  }

  & img {
    width: 100%;
    height: auto;
  }
`

export default StyledCountryCard;
