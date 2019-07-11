import React from 'react';
import { Component } from 'react';
import { MenuIcon } from './MenuToggleIcon';
import QueenCityMenu from '../../img/QueenCityMenu.png';
import MenuDrawer from './MenuDrawer';
import { MenuItems } from './MenuItems';
import { MenuItem } from './MenuItem';


class MenuToggle extends React.Component {
    constructor() {
        super();
        this.state = {
            open: null
        };
    }

    render() {
        const handleToggle = () => {
            if (!this.state.open)
                this.setState({
                    open: true
                });
            if (this.state.open === false) {
                this.setState({
                    open: true
                });
            } else if (this.state.open === true) {
                this.setState({
                    open: false
                });
            }
        }
        return (
            <div>
                <MenuIcon onClick={handleToggle} isOpen={this.state.open}>
                    <img src={QueenCityMenu} alt="icon" />
                </MenuIcon>

                <div>
                    {this.state.open !== null &&
                        <MenuDrawer isOpen={this.state.open}>

                            <MenuItems isOpen={this.state.open}>
                                <MenuItem href="#" isOpen={this.state.open}>Home</MenuItem>
                                <MenuItem href="#" isOpen={this.state.open}>Link 2</MenuItem>
                                <MenuItem href="#" isOpen={this.state.open}>Link 3</MenuItem>
                                <MenuItem href="#" isOpen={this.state.open}>Link 4</MenuItem>
                            </MenuItems>
                        </MenuDrawer>
                    }
                </div>

            </div>

        );
    }
}

export default MenuToggle;
