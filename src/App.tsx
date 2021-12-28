import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import FLList from './pages/FLList';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/fllist" element={<FLList />} />
      </Routes>
    </div>
  );
};

export default App;
