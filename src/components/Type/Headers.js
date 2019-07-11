import styled from 'styled-components';
import {h1FontSize} from '../../Styles/styles';
import {subheadingFontSize} from '../../Styles/styles';
import {HeaderPadding} from '../../Styles/styles';


export const Header1 = styled.h1`
    font-size: ${h1FontSize};
    color: ${props => props.color};
    padding-bottom: ${HeaderPadding};
    text-transform: uppercase;
    text-align: ${props => props.textAlign}
`;

export const Subheading = styled.h3`
    font-size: ${subheadingFontSize};
    color: ${props => props.color};
    font-weight: 200;
`;