import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Container from './components/Container';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';
import Nav from './components/Nav';

class App extends Component {

  render() {
    return (
      <BrowserRouter basename="/React-Gallery-App" forceRefresh={true}>
        <div className="container">
          <SearchForm onSearch={this.performSearch}/>
          <Nav />
          <Switch>
            <Route path ="/search/:tag" render={ props => <Container tag={ props.match.params.tag }/> } />
            <Route exact path ="/" render={ props => <Container tag='mustang'/> } />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
