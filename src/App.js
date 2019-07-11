import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import MenuToggle from './components/SlideOutMenu/Menu';
import {FullHeightContainer} from './components/Containers/FullHeightContainer';
import {HalfHeightContainer} from './components/Containers/HalfHeightContainer';
import {Header1} from './components/Type/Headers';
import {Subheading} from './components/Type/Headers';
import hero from './img/hero.jpg';
import {Column2} from './components/Columns/Column2';
import {Column3} from './components/Columns/Column3';
import Button from './components/Buttons/Button';

import {primaryColor} from './Styles/styles';
import {primaryDark} from './Styles/styles';
import {light} from './Styles/styles';


class App extends Component {

  render() {

    return (
      <div className="App">
        <MenuToggle />
        <FullHeightContainer image={hero} direction="column">
        <Header1 color={primaryColor}>Built With React.js</Header1>
        <Subheading color={light}>View the code on GitHub</Subheading>
        <Button>VIEW CODE</Button>
        </FullHeightContainer>


        <HalfHeightContainer color={primaryColor} direction="row">
          <Column2>
            <Header1 color={primaryDark} textAlign="left">The Single Greatest UI Kit</Header1>
          </Column2>
          <Column2>
            <Header1 color={primaryDark} textAlign="left">The Single Greatest UI Kit</Header1>
          </Column2>
        </HalfHeightContainer>


        <HalfHeightContainer color={primaryDark} direction="row">
          <Column3>
            <Header1 color={light} textAlign="left">The Single Greatest UI Kit</Header1>
          </Column3>
          <Column3>
            <Header1 color={light} textAlign="left">The Single Greatest UI Kit</Header1>
          </Column3>
          <Column3>
            <Header1 color={light} textAlign="left">The Single Greatest UI Kit</Header1>
          </Column3>
        </HalfHeightContainer>

      </div>
    );
  }
}

export default App;
