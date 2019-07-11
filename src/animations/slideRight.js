import styled, {keyframes} from 'styled-components';

export const slideRight = keyframes`
0% {
         width: 0%;
         opacity: 0;
        }
20% {
          width: 10%;
         opacity: 0.2;
        }
40%{
   width: 20%;
   opacity: 0.4;
} 
60%{
    width: 30%;
    opacity: 0.6;
}
80%{
    width: 40%;
    opacity: 0.8;
}
100%{
    width: 50%;
    opacity: 1;
}
`;

export const slideRightMobile = keyframes`
0% {
         width: 0%;
         opacity: 0;
        }
20% {
          width: 10%;
         opacity: 0.2;
        }
40%{
   width: 20%;
   opacity: 0.4;
} 
60%{
    width: 30%;
    opacity: 0.6;
}
80%{
    width: 40%;
    opacity: 0.8;
}
100%{
    width: 100%;
    opacity: 1;
}
`;