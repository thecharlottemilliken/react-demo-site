import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import MenuToggle from './components/SlideOutMenu/Menu';
import { FullHeightContainer } from './components/Containers/FullHeightContainer';
import { HalfHeightContainer } from './components/Containers/HalfHeightContainer';
import { Header1 } from './components/Type/Headers';
import { Subheading } from './components/Type/Headers';
import {Paragraph} from './components/Type/Paragraph';
import hero from './img/hero.jpg';
import { Column2 } from './components/Columns/Column2';
import { Column3 } from './components/Columns/Column3';
import Button from './components/Buttons/Button';

import { primaryColor } from './Styles/styles';
import { primaryDark } from './Styles/styles';
import { light } from './Styles/styles';


class App extends Component {

  render() {

    return (
      <div className="App">
        <MenuToggle />
        <FullHeightContainer image={hero} direction="column">
          <Header1 color={primaryColor}>Built With React.js</Header1>
          <Subheading color={light}>View the code on GitHub</Subheading>
          <Button href="https://github.com/thecharlottemilliken/react-demo-site">VIEW CODE</Button>
        </FullHeightContainer>

        <HalfHeightContainer direction="column">
          <Header1 color={primaryDark} textAlign="center">Powered by CSSinJS and React.js</Header1>
          <Paragraph color={primaryDark} textAlign="center">This project was built to explore the capabilities of CSSinJS and answer the age-old question:
            <br />
            <br />
            <strong>“Should the creator of CSSinJS be expelled from the dev community?” </strong>
            <br />
            <br />
            At first, I was disgusted. Then I was intrigued. Then I understood it’s advantages. CSSinJS is by no means needed for every project. However, it shouldn’t be taken as useless only because it seems like a heinous crime against all front end developers. In short, it’s not CSS. It’s not JS. Don’t approach it with the expectation it will make sense. As long as you expect it to be strange and perplexing, you will be able to see and utilize the advantages quickly.
            </Paragraph>
        </HalfHeightContainer>


        <HalfHeightContainer color={primaryColor} direction="row">
          <Column2>
            <Subheading color={primaryDark} textAlign="center">Column 1</Subheading>
            <Paragraph textAlign="center" color={primaryDark}>This is a single column component built to be dynamic and reusable.</Paragraph>
          </Column2>
          <Column2>
            <Subheading color={primaryDark} textAlign="center">Column 2</Subheading>
            <Paragraph textAlign="center" color={primaryDark}>This is a single column component built to be dynamic and reusable.</Paragraph>
          </Column2>
        </HalfHeightContainer>


        <HalfHeightContainer color={primaryDark} direction="row">
          <Column3>
            <Subheading color={light} textAlign="center">Column 1</Subheading>
            <Paragraph textAlign="center" color={light}>This is a single column component built to be dynamic and reusable.</Paragraph>
          </Column3>
          <Column3>
            <Subheading color={light} textAlign="center">Column 2</Subheading>
            <Paragraph textAlign="center" color={light}>This is a single column component built to be dynamic and reusable.</Paragraph>
          </Column3>
          <Column3>
            <Subheading color={light} textAlign="center">Column 3</Subheading>
            <Paragraph textAlign="center" color={light}>This is a single column component built to be dynamic and reusable.</Paragraph>
          </Column3>
        </HalfHeightContainer>

      </div>
    );
  }
}

export default App;
