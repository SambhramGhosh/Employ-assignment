import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../App';
import '../styles/EditUser.css';

function EditUser() {
  const { id } = useParams();
  const { users, updateUser } = useContext(UserContext);
  const [editedUser, setEditedUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      setEditedUser(user);
    } else {
      navigate('/users');
    }
  }, [id, users, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${editedUser.id}`, editedUser);
      updateUser(editedUser);
      navigate('/users');
    } catch (err) {
      setError('Failed to update user details');
    }
  };

  if (!editedUser) return null;

  return (
    <div className="edit-user-container">
      <form onSubmit={handleUpdate}>
        <h2>Edit User</h2>
        <input
          type="text"
          placeholder="First Name"
          value={editedUser.first_name}
          onChange={(e) => setEditedUser({ ...editedUser, first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={editedUser.last_name}
          onChange={(e) => setEditedUser({ ...editedUser, last_name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={editedUser.email}
          onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditUser;
