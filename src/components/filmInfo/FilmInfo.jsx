import React from 'react';
import './filmInfo.module.css';

const FilmInfo = ({ name, description, rating }) => {
    if (name === null){
        name = "Нет названия"
    }
    if (description === null){
        description = "Нет описания"
    }
    if (rating === null){
        rating = "Нет рейтинга"
    }
    return (
        <div style={{width:"600px", margin:"10px"}}>
            <div className="film-details">
                <h2 className="film-name">{name}</h2>
                <div className="film-description">{description}</div>
                <div className="film-rating">
                    <strong>Kinopoisk Rating:</strong> {rating}
                </div>
            </div>
        </div>

  );
}

export default FilmInfo;
