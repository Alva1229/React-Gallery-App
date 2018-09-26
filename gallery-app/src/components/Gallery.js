import React from 'react';
import Image from './Image';
import NotFound from '../components/NotFound';

const Gallery = props =>{

        const results = props.data;
        let pictures;
        if(results.length > 0) {
          pictures = results.map(data =>
              <Image
                  url={`https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`}
                  key={data.id}
                  alt={data.title}/>
          );
      } else {
          pictures = <NotFound />
      }

        return ( 
        <div className="photo-container">
                <ul>
                   {pictures}
                </ul>
        </div>
         );
    }
 
export default Gallery;
