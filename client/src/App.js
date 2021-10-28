import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import SearchBar from './components/searchBar';

import Home from './components/Home';
import Navbar from '../src/components/layouts/NavBar'
import Login from '../src/components/AuthComponents/login'
import Register from '../src/components/AuthComponents/register'


import Loader from './components/loader/Spinner'

import store from './store';


class App extends Component {





  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header> */}
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>

                <Switch>
                  <Route exact path='/' component={Home} />
                  {/*<Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} /> */}
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>

          {/* <SearchBar />
           <Loader /> 
          <PostForm /> 
          <hr />
          <Posts />*/}

        </div>
      </Provider>
    );
  }
}

export default App;
