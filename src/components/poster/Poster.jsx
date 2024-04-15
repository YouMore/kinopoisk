import React from 'react';
import './poster.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 

const Poster = ({ posters }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };  

  if (!posters || posters.length === 0) {
    return <div style={{margin:"15px", width:"400px", textAlign:"center"}}>Нет информации о постерах...</div>;
  }

  return (
    <div>
      <Slider {...settings} style={{margin:"15px", width:"400px", textAlign:"center"} }>
        {posters.map(poster => (
          <div key={poster.id}>
            <img style={{width:"100%", height:"auto", textAlign:"center"}} src={poster.previewUrl} alt={`Poster ${poster.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Poster;
