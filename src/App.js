import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import getRockets from './redux/apiRockets';
import Navbar from './components/Navbar';
import RocketsPage from './pages/RocketsPage';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import getMissions from './redux/apiMissions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
    dispatch(getMissions());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<RocketsPage />} />
        <Route path="/rockets" element={<RocketsPage />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
