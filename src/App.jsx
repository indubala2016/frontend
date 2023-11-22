import { useState } from 'react';
import "./App.css";
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return ( 
  <> 
  <Routes>
    <Route path='/' element={<SignUp/> } />
    <Route path='/login' element={<Login/> } />
    <Route path='/home' element={<Home/> } />

  </Routes>
  
  </>
  );
}

export default App;
