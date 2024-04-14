import React from 'react';
import classes from './FilmButton.module.css';

const FilmButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default FilmButton;