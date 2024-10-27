import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/components/Login/Login';
import Form from './pages/components/Subscriptions/Form';
import Table from './pages/components/Subscriptions/Table';

const Router = ({ authenticatedUser , addSubscription, subscriptions, delSubscription, isDarkTheme, setAuthenticatedUser  }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login setAuthenticatedUser ={setAuthenticatedUser } isDarkTheme={isDarkTheme} />} />
      <Route path="/main" element={authenticatedUser  ? (
        <div>
          <Form handleSubmit={addSubscription} inSubscription={{ name: "", category: "", followers: 0, lastStream: "" }} isDarkTheme={isDarkTheme} />
          <Table subscriptions={subscriptions} delSubscription={delSubscription} isDarkTheme={isDarkTheme} />
        </div>
      ) : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default Router;