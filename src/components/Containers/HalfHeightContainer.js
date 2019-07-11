import styled from 'styled-components';

export const HalfHeightContainer = styled.div`
height: auto;
width: 100vw;
min-height: 50vh;
background-color: ${props => props.color || ""};
background-image: ${props => `url("${props.image}")` || ""};
-webkit-background-size: cover;
background-size: cover;
-webkit-background-repear: no-repeat;
background-repeat: no-repeat;
z-index: 0;

display: flex; 
justify-content: ${props => props.align || "center"};
flex-direction: ${props => props.direction};
align-items: center;
padding: 5% 10%;
color: white;

@media only screen and (max-width: 1050px){
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    padding: 20px 10%;
}
`;