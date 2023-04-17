import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/Login" exact element={<Login/>}/>
          <Route path="/Register" exact element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
