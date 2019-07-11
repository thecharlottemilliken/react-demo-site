import {keyframes} from 'styled-components';

export const slideLeft = keyframes`
0% {
  width: 50%;
  opacity: 1;
 }
20% {
   width: 40%;
  opacity: 0.8;
 }
40%{
width: 30%;
opacity: 0.6;
} 
60%{
width: 20%;
opacity: 0.4;
}
80%{
width: 10%;
opacity: 0.2;
}
100%{
width: 0%;
opacity: 0;
}
`;


export const slideLeftMobile = keyframes`
0% {
  width: 100%;
  opacity: 1;
 }
20% {
   width: 40%;
  opacity: 0.8;
 }
40%{
width: 30%;
opacity: 0.6;
} 
60%{
width: 20%;
opacity: 0.4;
}
80%{
width: 10%;
opacity: 0.2;
}
100%{
width: 0%;
opacity: 0;
}
`;

