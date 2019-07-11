import React from 'react';
import styled from 'styled-components';

export const MenuItem = styled.a`
    color: white;
    font-size: 1.5em;
    align-text: left;
    display: flex;
    margin-bottom: 2%;
    align-self: left;
    text-decoration: none;
    z-index: 6;
    display: ${props => props.isOpen ? "flex" : "none"};

    &:hover{
        color: #2b2b2b;
        text-decoration: none;
    }
`;

