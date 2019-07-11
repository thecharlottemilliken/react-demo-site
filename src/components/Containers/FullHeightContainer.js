import styled from 'styled-components';

export const FullHeightContainer = styled.div`
height: 100vh;
width: 100vw;
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
padding-left: 10%;
padding-right: 10%;
color: white;


@media only screen and (max-width: 1050px){
    flex-direction: column;
}
`;