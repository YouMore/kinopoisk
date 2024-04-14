import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import {useNavigate} from "react-router-dom";
import FilmButton from '../UI/button/FilmButton';

const SameFilmsCarusel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };  
  const router = useNavigate();

  if (!movies || movies.length === 0) {
    return <div style={{margin:"15px", width:"400px", textAlign:"center"}}>Нет информации о похожих фильмах...</div>;
  }

  return (
    <div>
      <h1>Похожие фильмы</h1>
      <Slider {...settings} style={{margin:"15px", width:"400px", textAlign:"center"} }>
        {movies.map(movie => (
          <div key={movie.id}>
            <img style={{width:"100%", height:"auto", textAlign:"center"}} src={movie.poster.previewUrl} alt={movie.name} />
            <h3>{movie.name}</h3>
            {movie.rating && <p>Рейтинг: {movie.rating.kp}</p>}
            <FilmButton onClick={() =>{router(`/films/${movie.id}`)}}>Перейти</FilmButton>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SameFilmsCarusel;