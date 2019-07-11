import styled from 'styled-components';

export const Column2 = styled.div`
    height: auto;
    justify-content: left;
    width: 50vw;
    padding: 10px;

    @media only screen and (max-width: 1050px){
        width: 100%;
        align-self: center;
        justify-content: center;
    }
`;