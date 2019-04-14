import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './pages/Home';
import Admin from './pages/testpost'
import Navigation from './components/Navigation';
import './App.css';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
  },
});

const style = {
  flex: '1 1 auto',
  padding: '30px 60px'
}

class App extends Component {
  render() {
    return (
      <div style={{width: '100%'}}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app" style={style}>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={Admin} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
