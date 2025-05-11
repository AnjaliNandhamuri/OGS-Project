import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Auth.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'user@example.com' && password === '1234') {
      localStorage.setItem('loggedIn', 'true');
      navigate('/cart');
    } else {
      setError('Invalid login credentials. Please try again.');
    }
  };

  return (
    <div className="signin-page d-flex justify-content-center align-items-center min-vh-100">
      <div className="card signin-card p-4 shadow-lg">
        <div className="text-center mb-4">
          <h2 className="text-gradient fw-bold">Welcome Back</h2>
          <p className="text-muted">Log in to continue shopping 🍓</p>
        </div>
        {error && <div className="alert alert-danger text-center py-2">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">Email address</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="loginPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <span
                className="input-group-text cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              >
                <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
              </span>
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-pill mt-2">Log In</button>
        </form>

        <div className="text-center my-3 text-muted">or log in with</div>
        <div className="d-flex gap-3 justify-content-center mb-3">
          <button className="btn btn-outline-primary rounded-pill px-3">
            <i className="bi bi-google me-2"></i> Google
          </button>
          <button className="btn btn-outline-dark rounded-pill px-3">
            <i className="bi bi-github me-2"></i> GitHub
          </button>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">
            Don’t have an account?{' '}
            <Link to="/signin" className="text-success fw-semibold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
