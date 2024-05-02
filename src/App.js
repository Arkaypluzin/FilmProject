import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page from './Pages/Page';
import LoadingScreen from './Components/LoadingScreen';
import { useEffect, useState } from 'react';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      {loading ? (
        <LoadingScreen />
      ) : (
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='page/:id' element={<Page/>}/>
          </Routes>
          )}
        </BrowserRouter>
    </div>
  );
}

export default App;
