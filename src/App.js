import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import getPics from './redux/api';
import Navbar from './components/Navbar';
import PicsPage from './pages/PicsPage';
import './App.css';
import SinglePic from './pages/SinglePic';

function App() {
  const [selected] = useState('all');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPics());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<PicsPage />} />
        <Route path="/pics" element={<PicsPage selected={selected} />} />
        <Route path="/singlepic/:date" element={<SinglePic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
