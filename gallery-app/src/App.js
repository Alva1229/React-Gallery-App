import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import apiKey from './config';



class App extends Component {

  componentDidMount(){
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=20&format=json&nojsoncallback=1')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Gallery />    
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
