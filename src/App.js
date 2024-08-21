import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Calendar from './Calendar';
import Pomodoro from './Pomodoro';
import { useNavigate, Routes, Route, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary'; // Import the ErrorBoundary component
// import './index.css';

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
        <Route path='*' element={
          <div className='h-[100vh] w-full pt-[10vh] flex-col justify-center items-center'>
            <Navbar />
            <div className='flex h-10 items-center space-x-4 text-2xl'>
              <div>404</div>
              <div>Page Not Found</div>
            </div>
          </div>
        } />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
