import logo from './logo.svg';
import './App.css';
import { React, useEffect, Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Item from './Item';

function App() {
 
  
  return (
   <>
  
 <Router>
   <Routes>
     {/* login form */}
     <Route path='/' element={<Login />}></Route>

     <Route path='/items' element={ <Item /> } ></Route>
   </Routes>
 </Router>
   
   </>
  );
}

export default App;
