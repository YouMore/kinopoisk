import React, { useState } from "react";

function RandomFilm() {
  const [genres, setGenres] = useState('');
  const [countries, setCountries] = useState('');
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [networks, setNetworks] = useState('');



  return(
    <div>
        <h1>Random</h1>
        // не успел реализовать, но логика в том чтобы создать фильтры и с их помощью изменять состояния, 
        // затем измененные состояния передавать в запрос
        // запрос на https://api.kinopoisk.dev/v1.4/movie/random
        // соответственно имена параметров:
        // жанр genres.name
        // страна countries.name
        // сериал\фильм type
        // год выпуска year
        // рейтинг кинопоиска(значения) rating.kp
        // сеть производства(hbo netflix) networks.items.name
        // все доступные значения можно получить по адресу https://api.kinopoisk.dev/v1/movie/possible-values-by-field
        // необходимо только указать какой параметр нам нужен, 
        // например https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name
    </div>
  );
}

export default RandomFilm;