import './App.css';
import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import FilmList from './FilmList';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="HomePage" element={<HomePage/>}/>
        <Route path="FilmList" element={<FilmList/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;