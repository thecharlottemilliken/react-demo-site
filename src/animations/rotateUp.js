import styled, {keyframes} from 'styled-components';

export const rotateUp = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-90deg);
  }
`;