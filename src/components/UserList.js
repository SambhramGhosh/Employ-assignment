import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../App';
import '../styles/UserList.css';

function UsersList() {
  const { users, setUsers } = useContext(UserContext); 
  const [error, setError] = useState(null);  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users', {
        params: { page: 1, per_page: 12 },
      });
        setUsers(response.data.data);
      } catch (err) {
        console.error('Failed to fetch users');
        setError('Failed to fetch users');
      }
    };
    fetchUsers();
  }, [setUsers]);

  const handleDelete = async (id) => {
    try {

      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error('Failed to delete user');
      setError('Failed to delete user');
    }
  };

  return (
    <div className="users-list-container">
      <h2>Users</h2>
      {error && <div className="error-message">{error}</div>} {/* Display error if any */}
      <div className="users-grid">
  {users.map((user) => (
    <div className="user-card" key={user.id}>
      <img className="avatar" src={user.avatar} alt={user.first_name} />
      <div className="user-details">
        <h3>{user.first_name} {user.last_name}</h3>
        <p>{user.email}</p>
        <div className="buttons-container">
          <button
            className="edit-btn"
            onClick={() => navigate(`/edit/${user.id}`)}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
  
}

export default UsersList;
