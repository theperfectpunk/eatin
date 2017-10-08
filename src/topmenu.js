import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
//import IconMenu from 'material-ui/IconMenu';
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

    handleDrawer() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
                <div>
                    <AppBar
                        title="Eatin Restaurant"
                        iconElementLeft={
                            <IconButton
                                onClick={this.handleDrawer.bind(this)}
                            >
                                <MenuButton />
                            </IconButton>
                        }
                        iconElementRight={<IconButton tooltip="Your Cart">
                            <ShoppingCart />
                        </IconButton>}
                    />
                    <Drawer
                        open={this.state.open}
                        containerStyle={{height: 'calc(100% - 64px)', top: 64}}
                    >
                        <MenuItem onClick={this.handleDrawer.bind(this)}>Sign In</MenuItem>
                        <MenuItem onClick={this.handleDrawer.bind(this)}>New Order</MenuItem>
                        <MenuItem onClick={this.handleDrawer.bind(this)}>Contact Us</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TopMenu;