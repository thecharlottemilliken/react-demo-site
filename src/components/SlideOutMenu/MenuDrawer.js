import styled, { css } from 'styled-components';
import { slideLeft, slideLeftMobile } from '../../animations/slideLeft';
import { slideRight, slideRightMobile } from '../../animations/slideRight';

const MenuDrawer = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: 5;
height: 100vh;
background-color: #1c1c1c; 
-webkit-animation-duration: .4s;
-webkit-animation-fill-mode: forwards;
-webkit-animation-name: ${props => props.isOpen ? css`${slideRight}` : css`${slideLeft}`};
-ms-animation-duration: .4s;
-ms-animation-fill-mode: forwards;
-ms-animation-name: ${props => props.isOpen ? css`${slideRight}` : css`${slideLeft}`};
animation-duration: .4s;
animation-fill-mode: forwards;
animation-name: ${props => props.isOpen ? css`${slideRight}` : css`${slideLeft}`};

@media only screen and (max-width: 768px){
    ${props => props.isOpen ? css`
    animation-name: ${slideRightMobile};
    -webkit-animation-name: ${slideRightMobile};
    -ms-animation-name: ${slideRightMobile};

` : css`
animation-name: ${slideLeftMobile};
-webkit-animation-name: ${slideLeftMobile};
-ms-animation-name: ${slideLeftMobile};

`} `;

export default MenuDrawer;
