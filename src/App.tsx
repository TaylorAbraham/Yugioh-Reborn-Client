import React, { useEffect } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import FLList from './pages/FLList';
import { SERVER_URL } from './constants';

const App = () => {
  useEffect(() => {
    // Ping the server to wake it up, since Heroku apps sleep
    void fetch(`${SERVER_URL}/ping`);
  }, []);

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
