import React, { useState } from 'react';

import FilmButton from '../UI/button/FilmButton';

const SeasonsList = ({ seasonsInfo = []}) => {
  const seasonsPerPage = 1; 
  const totalPages = seasonsInfo ? seasonsInfo.length : 0; 


  const [currentPage, setCurrentPage] = useState(1); 

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentSeason = seasonsInfo[currentPage - 1];

  if (!currentSeason) {
    return (
      <div className="seasons-list">
        <h2>Список сезонов</h2>
        <div>Нет информации о сезонах</div>
      </div>
    );
  }

  return (
    <div className="seasons-list" style={{ margin: '5px', width: '60%' }}>
      <h2>Сезон {currentSeason.number}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {Array.from({ length: currentSeason.episodesCount }, (_, i) => (
          <div key={i + 1} style={{ flex: '0 0 25%', maxWidth: '25%', border: '1px solid red', borderRadius: '8px', padding: '20px', width: '300px', marginBottom: '5px' }}>
            <h3>Серия {i + 1}</h3>
            <p>{}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <FilmButton onClick={handlePrevPage} disabled={currentPage === 1} style={{ marginRight: '10px' }}>Пред</FilmButton>
        <div className="descriptionPag">{`Страница ${currentPage} из ${totalPages}`}</div>
        <FilmButton onClick={handleNextPage} disabled={currentPage === totalPages} style={{ marginLeft: '10px' }}>След</FilmButton>
      </div>
    </div>
  );
};

export default SeasonsList;
