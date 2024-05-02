import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import FilmList from './FilmList';
import LoadingScreen from './LoadingScreen'; // Importez le composant LoadingScreen

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          <Route path="HomePage" element={<HomePage />} />
          <Route path="FilmList" element={<FilmList />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
