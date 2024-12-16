import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from './redux/slices/authSlice';
import Login from './pages/components/Login/Login';
import Form from './pages/components/Subscriptions/Form';
import Table from './pages/components/Subscriptions/Table';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const Main = () => (
  <>
    <Form inSubscription={{ name: "", category: "", followers: 0 }} />
    <Table />
  </>
);

const Router = ({ isDarkTheme, toggleTheme }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/main"
        element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default Router;