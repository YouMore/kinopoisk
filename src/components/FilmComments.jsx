import React from "react";

const FilmComments = ({films}) => {

    if (!films.length){
        return (
            <h1 style={{textAlign:"center"}}>
                 Фильмы не найдены
            </h1>
        );
    }

    return (
        <div>
            <h1 >
                СПИСОК ФИЛЬМОв
            </h1>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                {films.map(film =>
                <FilmItem film={film} key={film.id}/>
                )}
            </div>
        </div>

    );
};

export default FilmComments;