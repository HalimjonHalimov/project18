import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Drainer from './pages/drainer'

function App() {
  const [currentUser, setCurrentUser ] =  useState(true)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={currentUser ?  <Home /> : <Login />} />
      <Route path="/login" element={currentUser ? <Home /> :  <Login />} />
      <Route path="/drainer" element={currentUser ? <Drainer /> :  <Login />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
