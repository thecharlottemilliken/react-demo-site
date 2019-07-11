import styled, { keyframes } from 'styled-components';
import '../../img/QueenCityMenu.png';
import { rotateUp } from '../../animations/rotateUp';
import { rotateDown } from '../../animations/rotateDown';


export const MenuIcon = styled.div`
position: absolute;
top: 20px;
left: 20px;
animation-name: ${props => props.isOpen ? rotateUp : rotateDown};
animation-duration: .4s;
animation-fill-mode: forwards;
-ms-animation-name: ${props => props.isOpen ? rotateUp : rotateDown};
-ms-animation-duration: .4s;
-ms-animation-fill-mode: forwards;
-webkit-animation-name: ${props => props.isOpen ? rotateUp : rotateDown};
-webkit-animation-duration: .4s;
-webkit-animation-fill-mode: forwards;
transform-orgin: center;

z-index: 6;
`;
