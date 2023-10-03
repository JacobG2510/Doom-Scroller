import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Search from './Pages/Search';
import { useState } from 'react';
function App() {
  
  return (
    <>
    <button onClick={()=>{
      localStorage.setItem("token","")
      window.open("/","_self")
    }}>Sign out</button>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<Search/>} />
    </Routes>
    </>


  );
}

export default App;
