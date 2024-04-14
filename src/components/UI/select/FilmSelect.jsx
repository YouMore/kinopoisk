import React from "react";
import './select.module.css';

const FilmSelect = ({options, defaultOption, value, onChange}) =>{
    return(
        <select 
            value={value} 
            onChange= {event => {onChange(event.target.value)}}
        >
            <option value="...">{defaultOption}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default FilmSelect