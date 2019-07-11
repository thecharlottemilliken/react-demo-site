import React from 'react';
import {ButtonWrapper} from './ButtonWrapper';

const Button = (props) => {
    return(
       <a href={props.href}><ButtonWrapper>{props.children}</ButtonWrapper></a> 
    )
}

export default Button;