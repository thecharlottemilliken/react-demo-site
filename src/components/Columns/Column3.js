import styled from 'styled-components';

export const Column3 = styled.div`
    height: auto;
    justify-content: left;
    width: 33%;
    padding: 10px;

    @media only screen and (max-width: 1050px){
        width: 100%;
        justify-content: center;
    }
`;