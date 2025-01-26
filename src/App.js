// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PreLoader from './components/common/PreLoader';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ResumePage from './pages/ResumePage';
import StackPage from './pages/StackPage';


function App() {
  const [isLightTheme, setLightTheme] = useState(true);
  const changeTheme = () => {
    setLightTheme(!isLightTheme);
    console.log(isLightTheme);
  }

  return (
    <>
    <Router>
      <PreLoader />

      <div className={isLightTheme ? 'App light-theme' : 'App dark-theme'}>

        <main>
          <Header isLightTheme={isLightTheme} changeTheme={changeTheme} />
          <Routes>
            <Route path='/' exact Component={HomePage} />
            <Route path='/projects' Component={ProjectsPage} />
            <Route path='/projects/:slug' Component={ProjectDetailPage} />
            <Route path='/stack' Component={StackPage} />
            <Route path='/resume' Component={ResumePage} />
          </Routes>
          <Footer />
        </main>

      </div>
      </Router> 
    </>

  );
}

export default App;
