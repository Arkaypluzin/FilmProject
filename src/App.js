import './App.css';
import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="HomePage" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;