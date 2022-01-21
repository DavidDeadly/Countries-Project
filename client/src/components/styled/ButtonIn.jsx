import styled from 'styled-components';

import Button from '../reusable/Button';

const ButtonIn = styled(Button)`
  background-color: ${(props) => props.backgroundColor};
  color: white;

  :hover {
    cursor: pointer;
  }
`

export default ButtonIn;