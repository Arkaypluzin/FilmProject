import React from 'react';
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur la page d'accueil !</p>
      <NavLink to="/Compteur">oui</NavLink>
    </div>
  );
}
/*import { NavLink } from "react-router-dom";

const HomePage = ({ userData }) => {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur la page d'accueil, {userData.name} !</p>
      <NavLink to="/HomePage">oui</NavLink>
    </div>
  );
}
*/

export default HomePage;
