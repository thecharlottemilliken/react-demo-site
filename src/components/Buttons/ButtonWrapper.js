import styled from 'styled-components';
import {primaryColor} from '../../Styles/styles';

export const ButtonWrapper = styled.button`
    color: black;
    font-size: 1em;
    align-text: center;
    z-index: 6;
    background-color: ${primaryColor};
    padding: 1vh 5vw;
    border: 0;
    margin: 20px 0 0 0;

    &:hover{
        color: black;
        text-decoration: none;
        background-color: #007fba;
    }

    &:active{
        -moz-box-shadow:    inset 0 0 10px rgb(0,0,0, .30);
        -webkit-box-shadow: inset 0 0 10px rgb(0,0,0, .30);
        box-shadow:         inset 0 0 10px rgb(0,0,0, .30);
     }
     &:focus{
        outline: none;
    }
    }
`;

