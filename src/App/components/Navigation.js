import React, { Component } from "react";
import NavigationItem from './NavigationItem';

const style = {
    paddingTop: '30px',
    display: 'flex',
    justifyContent: 'center'
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
            destination="/code"
            text="codeStuff"
          />
          <NavigationItem 
            destination="/music" 
            text="musicStuff" 
          />
          <NavigationItem 
            destination="/travel" 
            text="travelStuff" 
          />
          <NavigationItem
            destination="/craftBeer"
            text="craftBeerStuff"
          />
        </ul>
      </div>

    );
  }
}

export default Navigation;
