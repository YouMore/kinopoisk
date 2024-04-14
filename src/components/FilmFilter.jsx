import React from "react";
import FilmNameInput from "./UI/input/FilmNameInput";
import FilmSelect from "./UI/select/FilmSelect";

const FilmFilter = ({filter, setFilter}) =>{
    return (
        <div>
            <div>
                <h1>Выбор сортировки</h1>
                <FilmNameInput
                    value = {filter.search}
                    onChange={e => setFilter({...filter, search:e.target.value})}
                    placeholder = "Поиск по названию"
                />
            </div>
            <div>
                <FilmSelect 
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                    defaultOption = "Без сортировки ..."
                    options = {[
                        {value:'name', name:'По названию'},
                        {value:'year', name:'По году'},
                        {value:'ageRating', name:'По возрастному ограничению'}
                    ]}
                />
            </div>

        </div>
    );
};


export default FilmFilter;