import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Calendar from './Calendar';
import Pomodoro from './Pomodoro';
import Player from './components/musicplayer';
import { useNavigate, Routes, Route, BrowserRouter } from 'react-router-dom';
import StudyRoom from './StudyRoom'
import ErrorBoundary from './components/ErrorBoundary'; // Import the ErrorBoundary component
// import './index.css';
import NotFound from "./NotFound"
import SettingsContextProvider from './context/SettingsContext';
function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const navigate = useNavigate();

  return (
    <ErrorBoundary>

      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Header />
          </>
        } />
        <Route path='/calendar' element={
          <>
            <Navbar />
            <Calendar />
          </>
        } />
        <Route path='/pomodoro' element={
          <>
            <Navbar />
            <SettingsContextProvider>
            <Pomodoro />
            </SettingsContextProvider>
          </>
        } />
        <Route path='/player' element={
          <>
            <Navbar />
          <Player />
          </>
        } />
        <Route path='/study' element={
          <>
            <Navbar />
          < StudyRoom/>
          </>
        } />
          <Route path="*" element={<NotFound />} />
      </Routes>
        </ErrorBoundary>
  );
}

export default App;
