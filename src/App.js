import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Mail from './components/Mail'
import EmailList from './components/EmailList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="app">
        <Header />

        <div className="app__body">

          <Sidebar />

          <Routes>
            <Route exact path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
