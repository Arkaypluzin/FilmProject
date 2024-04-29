import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './Input';
import CountButton from './CountButton';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ToDoList from './ToDoList';
import Compteur from './Compteur';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="HomePage" element={<HomePage/>}/>
        <Route path="ToDoList" element={<ToDoList/>}/>
        <Route path="Compteur" element={<Compteur/>}/>
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   const [variable, setVariable] = useState('string')
//   const variableButton = () => {
//     if (variable === 'variable') {
//       return (
//         <button>
//           'ceci est un bouton'
//         </button>
//     )
//   }
//   return (
//     <p>ceci n'est pas un bouton</p>
//   )
// }
//   return (
//     <div className="App">
//       <header className="App-header">
//         {variableButton()}
//         <Input text={'Yayyyyy'}/>
//         <CountButton text={'aaaaahaha'}/>
//       </header>
//     </div>
//   );
// }

export default App;