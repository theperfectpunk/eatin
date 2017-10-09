import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import MenuButton from 'material-ui/svg-icons/navigation/menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class TopMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
                <div>
                    <AppBar
                        title="Eatin Restaurant"
                        iconElementLeft={
                            <IconButton
                                onClick={this.props.toggleDrawer}
                            >
                                <MenuButton />
                            </IconButton>
                        }
                        iconElementRight={
                            <IconMenu
                                tooltip="Your Cart"
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                iconButtonElement={
                                    <IconButton>
                                        <ShoppingCart />
                                    </IconButton>
                                }
                            >
                                <MenuItem>Item 1</MenuItem>
                                <MenuItem>Item 2</MenuItem>
                            </IconMenu>
                        }
                    />
                    <Drawer
                        open={this.props.open}
                        containerStyle={{height: 'calc(100% - 64px)', top: 64}}
                    >
                        <MenuItem onClick={this.props.togglDrawer}>Sign In</MenuItem>
                        <MenuItem onClick={this.props.togglDrawer}>New Order</MenuItem>
                        <MenuItem onClick={this.props.togglDrawer}>Contact Us</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TopMenu;