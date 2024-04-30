  import React from 'react';
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur la page d'accueil !</p>
      <NavLink to="/FilmList">oui</NavLink>
    </div>
  );
}
export default HomePage;
