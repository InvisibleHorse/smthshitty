import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import PropTypes from 'prop-types';
import Header from './components/partials/Header';
import Nav from './components/Nav';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/ProfileContainer';
import Footer from './components/partials/Footer';
import Messages from './components/Messages/Messages';
import AuthContainer from './components/Authorisation/Authorisation-container';
import Register from './components/Authorisation/Register';

function App(props) {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/auth', {
        withCredentials: true
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { email, name } = response.data;
          props.setUsersData(email, name);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/auth');
      });
  }, []);

  return (
    <div className="App">
      <div className="grid">
        <Header />
        <Nav />
        <Routes>
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/messages" element={<Messages />}>
            <Route path="/messages/:id" element={<Messages />} />
          </Route>
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/auth" element={<AuthContainer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users/profile/:id" element={<ProfileContainer />} />
          <Route path="/settings" element={<Messages />} />
          <Route path="/governmentsecrets" element={<Messages />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  setUsersData: PropTypes.func.isRequired,
};

export default App;
