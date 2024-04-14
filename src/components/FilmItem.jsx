import React from "react";
import { Card} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import FilmButton from "./UI/button/FilmButton";

function FilmItem({ film }) {
  const router = useNavigate();
  return (
    <Card className="film" style={{flex: "0 0 25%", maxWidth: "25%", border: '1px solid red', borderRadius: '8px', padding: '20px', width: '300px', marginBottom:'5px'}}>
      <Card.Body>
        <Card.Title><strong>{film.name}</strong></Card.Title>
        <div className="info">
          <div style={{display:'flex'}}>
            {film.countries.map((country)=> (
              <div key={country.name} style={{paddingRight:'2px'}}>{country.name}</div>
            ))}
          </div>
          <div>{film.year}</div>
          <div>{film.ageRating}+</div>
        </div>
        <FilmButton onClick={() =>{router(`/films/${film.id}`)}}>Подробнее</FilmButton>
      </Card.Body>
    </Card>
  );
}

export default FilmItem;