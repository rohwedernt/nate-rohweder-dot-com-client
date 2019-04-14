import React from 'react';
import Navigation from '../components/Navigation';
import Router from '../Router';


function Main(props) {
    return(
        <div>
            <Navigation />
            <Router {...props} />
        </div>
        
    );
}

export default Main;