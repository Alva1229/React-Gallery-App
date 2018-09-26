import React from 'react';

//image url and alt
const Image = props => (
    <li>
        <img src={props.url} alt={props.alt}/>
    </li>
);

export default Image;