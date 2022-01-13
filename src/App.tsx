import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import CardInfoProvider from './components/CardInfoContext';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import FLList from './pages/FLList';
import AddList from './pages/AddList';

const App = () => {
  return (
    <div className="App">
      <CardInfoProvider>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/fllist" element={<FLList />} />
          <Route path="/addlist" element={<AddList />} />
        </Routes>
      </CardInfoProvider>
    </div>
  );
};

export default App;
