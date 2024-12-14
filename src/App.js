import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import UsersList from './components/UserList';
import EditUser from './components/EditUser';
import './styles/App.css';

export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState([]);

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      );
      console.log('Updated Users:', updatedUsers);
      return updatedUsers;
    });
  };
  
  

  return (
    <UserContext.Provider value={{ users, setUsers, updateUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
