import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page from './Pages/Page';


function App() {
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
