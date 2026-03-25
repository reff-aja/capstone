import { useState } from "react";
import '../Login.css';
import loginImg from '../assets/login-image.svg';

const Login = () => {
  // 1. State untuk menyimpan input user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Fungsi untuk menangani saat tombol Login diklik
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah halaman refresh

    // Di sini kamu bisa menambahkan logika cek login (API call)
    if (email === "admin@student.com" && password === "123456") {
      alert("Login Berhasil! Selamat datang di Student Portal.");
    } else {
      alert("Email atau Password salah!");
    }

    console.log("Data dikirim:", { email, password });
  };

  return (
    <div className="login-container">
      {/* Bagian Kiri */}
      <div className="login-left">
        <div className="form-wrapper">
          <h2>Login</h2>
          
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state saat diketik
              required 
            />
            
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state saat diketik
              required 
            />
            
            <button type="submit" className="btn-login">Login</button>
          </form>

          <div className="signup-text">
            Don't have an account? <a href="#" className="btn-signup">Sign Up</a>
          </div>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="login-right">
        <div className="welcome-content">
          <h1>Welcome To</h1>
          <h3>Student Portal</h3>
          <p>Login to access your account</p>
          <img 
            src={loginImg} 
            alt="Student Illustration" 
          />
        </div>
      </div>
    </div>
  );
};

export default Login;