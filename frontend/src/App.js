import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/Login" exact element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
