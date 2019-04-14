import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Admin from '../controller/Admin';
import About from './pages/About';

function Router(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route 
                path='/about'
                render={() => <About />}
            />
            <Route 
                path="/admin" 
                render={() => <Admin {...props} />}
            />
      </Switch>
    );
}

export default Router;
