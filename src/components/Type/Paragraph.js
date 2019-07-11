import styled from 'styled-components';
import {bodyFontSize} from '../../Styles/styles';


export const Paragraph = styled.p`
    font-size: ${bodyFontSize};
    color: ${props => props.color};
    text-align: ${props => props.textAlign}
    line-height: 1.5;
`;
