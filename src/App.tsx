import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './About';
import './App.css';
import { InputForm } from './InputForm';
import { Navigation } from './Navigation';
import { routesPaths } from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<div> Let's go! </div>}/>
          <Route path="*" element={<div>404</div>}/>
          <Route path={`/${routesPaths.about}`} element={<About/>}/>
          <Route path={`/${routesPaths.form}`} element={<InputForm defaultValue={'type your name here'}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
