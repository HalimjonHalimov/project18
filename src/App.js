import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'

function App() {
  const [currentUser, setCurrentUser ] =  useState(true)

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={currentUser ?  <Home /> : <Login />} />
      <Route path="/login" element={currentUser ? <Home /> :  <Login />} /> */}
      <Route path="/" element={ <Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
