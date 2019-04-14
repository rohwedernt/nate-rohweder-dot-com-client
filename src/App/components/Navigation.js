import React, { Component } from "react";
import NavigationItem from './NavigationItem';

const style = {
    display: 'flex',
    justifyContent: 'center',
}

const ulStyle = {
  listStyleType: 'none',
  padding: '0',
}

class Navigation extends Component {
  render() {
    return (
      <div style={style}>
        <ul style={{display: 'flex', listStyleType: 'none', padding: '0', margin: '0'}}>
          <NavigationItem 
            destination="/home"
            text="nateRohweder"
            class="title"
          />
          <NavigationItem 
            destination="/about" 
            text="about" 
          />
          <NavigationItem
            destination="/codeStuff"
            text="codeStuff"
          />
          <NavigationItem 
            destination="/musicStuff" 
            text="musicStuff" 
          />
          <NavigationItem 
            destination="/travelStuff" 
            text="travelStuff" 
          />
          <NavigationItem
            destination="/craftBeerStuff"
            text="craftBeerStuff"
          />
        </ul>
      </div>

    );
  }
}

export default Navigation;
