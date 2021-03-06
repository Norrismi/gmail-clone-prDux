import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Mail from './components/Mail'
import EmailList from './components/EmailList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sendmail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './components/Login';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)

  return (
    <Router>

      {!user ? <Login /> : (

        <div className="app">

          <Header />
          <div className="app__body">

            <Sidebar />

            <Routes>
              <Route exact path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <Sendmail />}
        </div>
      )}
    </Router>
  );
}

export default App;
