import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import RandomFilm from "../pages/RandomFilm";
import Films from "../pages/Films";
import FilmIdPage from "../pages/FilmIdPage";

const AppRouter = () =>{
    return (
        <div>
          <Routes>
            <Route path="/random" element={<RandomFilm/>}/>
            <Route exact path="/films" element={<Films/>} />
            <Route exact path="/films/:id" element={<FilmIdPage/>} />
            <Route path="*" element={<Navigate to="/films" replace />} />
          </Routes>
        </div>
    );
}

export default AppRouter