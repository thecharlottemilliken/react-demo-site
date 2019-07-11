import React from 'react';
import styled from 'styled-components';


export const MenuItems = (props) => {
    return (
        <MenuItemsWrapper>
            {props.children}
        </MenuItemsWrapper>
    );
}

export const MenuItemsWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 20%;
align-items: center;
z-index: 6;
`;