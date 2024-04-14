import React from "react";
import  "./styles/App.css";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";


function App() {
  return(
    <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;