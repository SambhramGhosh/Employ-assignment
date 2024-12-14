import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      });
      localStorage.setItem('token', response.data.token);
      navigate('/users');
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
  <form onSubmit={handleLogin}>
    <h2>Login</h2>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    {error && <p className="error-message">{error}</p>}
    <button type="submit">Login</button>
  </form>
</div>



  );
}

export default Login;