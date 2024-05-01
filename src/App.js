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
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='page/:id' element={<Page/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
