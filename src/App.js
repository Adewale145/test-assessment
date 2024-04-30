import { useState } from "react";
import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProductPage from "./components/ProductPage";
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return(
    <>
      <BrowserRouter>
          <h1>React Developer Technical Assessment - Fake Store API Integration</h1>
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<ProductPage />}/>
          <Route path="/" exact element={<Login />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </> 
    

      
  )
}

export default App

 

