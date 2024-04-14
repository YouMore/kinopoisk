import React, { useState } from 'react';
import './actorList.module.css';
import FilmButton from '../UI/button/FilmButton';

const ActorList = ({ actors = [] }) => {
    const filteredActors = actors.filter(actor => actor.profession === 'актеры');
    const actorsPerPage = 10; // Количество актеров на одной странице
    const totalPages = Math.ceil(filteredActors.length / actorsPerPage); // Общее количество страниц
    const [actorPage, setActorPage] = useState(1); // Текущая страница актеров
  
    // Вычисляем индексы начала и конца актеров для текущей страницы
    const startIndex = (actorPage - 1) * actorsPerPage;
    const endIndex = startIndex + actorsPerPage;
  
    const handlePrevPage = () => {
      if (actorPage > 1) {
        setActorPage(actorPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (actorPage < totalPages) {
        setActorPage(actorPage + 1);
      }
    };
  
    if (filteredActors.length === 0) {
      return (
        <div className="actors-list">
          <h2>Список актеров</h2>
          <div> Нет информации об актерах</div>
        </div>
      );
    }
  
    return (
      <div className="actors-list" style={{ margin:"5px", width:"60%"}}>
        <h2>Список актеров</h2>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
          {filteredActors.slice(startIndex, endIndex).map(actor => (
            <div key={actor.id} style={{flex: "0 0 25%", maxWidth: "25%", border: '1px solid red', borderRadius: '8px', padding: '20px', width: '300px', marginBottom:'5px'}}>
              <h3>{actor.name}</h3>
              <p>{actor.profession}</p>
            </div>
          ))}
        </div>
        <div className="pagination">
          <FilmButton onClick={handlePrevPage} disabled={actorPage === 1} style={{marginRight:"10px"}}>Пред</FilmButton>
          <div className="descriptionPag">{`Страница ${actorPage} из ${totalPages}`}</div>
          <FilmButton onClick={handleNextPage} disabled={actorPage === totalPages} style={{marginLeft:"10px"}}> След </FilmButton>
        </div>
      </div>
    );
  };
  
  export default ActorList;