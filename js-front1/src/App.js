import React from 'react';
import Form from './Form';
import Table from './Table';
import TwitchAPI from "./api/service";
import Login from './Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const initialSubscriptions = TwitchAPI.all();

function App() {
  const [subscriptions, setSubscriptions] = React.useState(initialSubscriptions);
  const [authenticatedUser, setAuthenticatedUser] = React.useState(null);

  const delSubscription = (id) => {
    if (TwitchAPI.delete(id)) {
      setSubscriptions(subscriptions.filter((subscription) => subscription.id !== id));
    }
  };

  const addSubscription = (subscription) => {
    const newSubscription = TwitchAPI.add(subscription);
    if (newSubscription) {
      setSubscriptions([...subscriptions, newSubscription]);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setAuthenticatedUser={setAuthenticatedUser} />} />
        <Route path="/main" element={authenticatedUser ? (
          <div>
            <Form handleSubmit={addSubscription} inSubscription={{ name: "", category: "", followers: 0, lastStream: "" }} />
            <Table subscriptions={subscriptions} delSubscription={delSubscription} />
          </div>
        ) : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;