import styled from "styled-components";

const StyledCountryCard = styled.div`
  display: ${props => props.filtered ? "none" : "block"};
  position: relative;
  height: auto;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  .ct-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    font-size: 1.2rem;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.4);
    opacity: 0;
  }

  img, .ct-data {
    filter: grayscale(.5);
    transition: 300ms ease-in-out;
  }

  &:hover {

    img, .ct-data {
      transform: scale(1.025);
    }

    img {
      filter: blur(2px);
    }

    .ct-data {
      opacity: 1;
    }
  }
`

export default StyledCountryCard;
