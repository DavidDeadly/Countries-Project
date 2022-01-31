import React from 'react';
import styled from 'styled-components';

const StyledLoadingPage = styled.div`
  height: 100%;
  display: grid;
  place-items: center;

  h1 {
    font-weight: lighter;
    font-size: 4rem;
    font-family: 'Rubik Beastly', 'Courier New';
    color: gray;
    -webkit-text-stroke: 0.2rem black;
  }
`

const Loadingpage = () => {
  return (
    <StyledLoadingPage>
      <h1>Loading....</h1>
    </StyledLoadingPage>
  );
}

export default Loadingpage;
