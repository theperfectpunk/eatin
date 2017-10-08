import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class TopMenu extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
                <AppBar
                    title="Eatin Restaurant"
                    iconElementRight={<IconButton tooltip="SVG Icon">
                        <ShoppingCart />
                    </IconButton>}
                />
            </MuiThemeProvider>
        );
    }
}

export default TopMenu;