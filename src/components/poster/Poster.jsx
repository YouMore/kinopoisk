import React from 'react';
import './poster.css';

const Poster = ({imageUrl}) => {
    if (imageUrl === null) {
        return (
            <div className="image-container">
                Эххх... Картинки нет:(
            </div>
        );
    }
    return (
    <div className="image-container">
      <img src={imageUrl} alt="Image" className="image"/>
    </div>
  );
};

export default Poster;