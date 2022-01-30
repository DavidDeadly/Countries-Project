import styled from "styled-components";

const CoutriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  place-items: center;
  grid-gap: 2rem;
  margin: auto;
  max-width: 80%;
  min-height: 50vh;

  #last {
    grid-column: 2/3;
  }

  @media (max-width: 850px) {
    grid-template-columns: auto;
  }
`

export default CoutriesContainer;