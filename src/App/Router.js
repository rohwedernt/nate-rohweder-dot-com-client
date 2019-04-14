import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import About from './pages/About';
import PostViewer from './components/PostViewer';
import Post from './components/Post';


class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPostId: null };
      }

    setCurrentPostId = id => {this.setState({ currentPostId: id })}

    render() {
        let currentPost = this.props.routerProps.data.find(x => x.id == this.state.currentPostId);
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route 
                    path='/about'
                    render={() => <About {...this.props} />}
                />
                <Route 
                    path='/codeStuff'
                    render={() => <PostViewer {...this.props} setId={this.setCurrentPostId} />}
                />
                <Route 
                    path='/post/:id'
                    render={() => <Post postData={currentPost} />}
                />
                <Route 
                    path="/admin" 
                    render={() => <Admin {...this.props} />}
                />
            </Switch>
        );
    }
  }

export default Router;
