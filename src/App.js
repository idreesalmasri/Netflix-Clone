import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import FavList from "./components/FavList";
import NavBar from "./components/Navbar";
import {useEffect, useState} from 'react';
function App() {
  return (
    <>
    {/* // <Home/> */}
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FavList" element={<FavList />} />
      </Routes>
      </>
  );
}

export default App;
