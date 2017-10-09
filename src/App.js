import React, { Component } from 'react';
import TopMenu from './topmenu';
import FoodGrid from './foodgrid'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={open: false};
  }

  handleDrawer() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <TopMenu toggleDrawer={this.handleDrawer.bind(this)} open={this.state.open}/>
        <FoodGrid open={this.state.open} />
      </div>
    );
  }
}

export default App;
