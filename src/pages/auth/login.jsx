import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
    <div className="auth-container fade-in">
      <div className="panel">
        <div className="panel-label">Login</div>
        <div className="card">
          <div className="card-illo">🎓</div>
          <div className="card-title">Selamat Datang!</div>
          <div className="card-sub">Masuk untuk melanjutkan perjalanan belajarmu</div>
          
          <div className="field">
            <label>Alamat Email</label>
            <input type="email" className="finput" placeholder="nama@email.com" />
          </div>
          
          <div className="field">
            <label>Password</label>
            <input 
              type="password" 
              className="finput" 
              style={{ letterSpacing: '4px' }} 
              defaultValue="password"
            />
          </div>
          
          <div className="forgot">Lupa password?</div>
          
          <button className="btn-full">Masuk ke FlexiStudy</button>
          
          <div className="divider">
            <div className="dline"></div>
            <div className="dtxt">atau masuk dengan</div>
            <div className="dline"></div>
          </div>
          
          <div className="oauth">
            <div className="obtn">🌐 Google</div>
            <div className="obtn">📘 Facebook</div>
          </div>
          
          <div className="switch">
            Belum punya akun? <Link to="/register"><span>Daftar gratis</span></Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;