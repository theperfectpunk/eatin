    import React, { Component } from 'react';

    class FoodGrid extends Component {
        render() {

            const drawerStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
            
            if (this.props.open) {
                drawerStyle.marginLeft = 256;
            }

            return(
                <div style={drawerStyle}>
                    <h1>This is the Grid</h1>
                </div>
            );
        }
    }

    export default FoodGrid;