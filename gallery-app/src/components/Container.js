import React, {Component} from 'react';
import axios from 'axios';
import apiKey from '../config';
import Gallery from './Gallery';
import NotFound from './NotFound';

class Container extends Component {

    constructor (){
      super();
      this.state= {
        pictures: [],
        loading: true
      };
    }
  
    //Fetch data from flickr api and set state 
    componentDidMount(){
     
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.tag}&per_page=20&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
              pictures : response.data.photos.photo,
              loading: false
          });
        })
        .catch(error => {
          console.log('Error while parsing data', error);
          this.setState({
              loading: false
          })
        });
    }
    render() {
        //checks for loading message
          if (this.state.loading){
            return (
              <div className ="container">
              <h2>Loading... </h2>
              </div>
            )
          }
        //checks for match search
          if(this.state.pictures.length === 0){
            return(
            <div className ="container">
              <NotFound />
            </div>
            )
          }
        //displays component of matching photos
          return (
            <div className="container">
             <h2>{this.props.tag} Gifs</h2>
             <Gallery data={this.state.pictures} /> 
            </div>
          );
        }
    }
      export default Container;
