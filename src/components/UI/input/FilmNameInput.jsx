import React from "react";
import classes from './FilmNameInput.module.css';

const  FilmNameInput = (props) =>{
    return(
        <input className={classes.myInput} {...props}/>
    );
};

export default FilmNameInput