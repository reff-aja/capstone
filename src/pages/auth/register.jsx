import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-container">
    <div className="auth-container fade-in">
      <div className="panel">
        <div className="panel-label">Register</div>
        <div className="card">
          <div className="step-indicator">
            <div className="step-dot active"></div>
            <div className="step-dot active"></div>
            <div className="step-dot"></div>
          </div>
          
          <div className="card-title">Buat Akun Baru</div>
          <div className="card-sub">Langkah 2 dari 3 — Informasi Akun</div>
          
          <div className="row2">
            <div className="field">
              <label>Nama Depan</label>
              <input type="text" className="finput" defaultValue="Sari" />
            </div>
            <div className="field">
              <label>Nama Belakang</label>
              <input type="text" className="finput" defaultValue="Amelia" />
            </div>
          </div>
          
          <div className="field">
            <label>Alamat Email</label>
            <input type="email" className="finput" defaultValue="sari@email.com" />
          </div>
          
          <div className="field">
            <label>Password</label>
            <input 
              type="password" 
              className="finput" 
              style={{ letterSpacing: '4px' }} 
              defaultValue="password"
            />
            <div className="strength">
              <div className="strength-bar">
                <div className="sb fill"></div>
                <div className="sb fill"></div>
                <div className="sb fill"></div>
                <div className="sb"></div>
              </div>
              <div className="strength-lbl">Kekuatan: Kuat</div>
            </div>
          </div>
          
          <div className="field">
            <label>Tingkatan Kelas</label>
            <select className="finput">
              <option>SD</option>
              <option>Kelas 7 SMP</option>
              <option>Kelas 8 SMP</option>
              <option>Kelas 9 SMP</option>
              <option>Kelas 10 SMA</option>
              <option>Kelas 11 SMA</option>
              <option>Kelas 12 SMA</option>
            </select>
          </div>
          
          <button className="btn-full">Lanjut ke Tes Awal →</button>
          
          <div className="switch">
            Sudah punya akun? <Link to="/login"><span>Masuk</span></Link>
          </div>
          
          <div className="terms">
            Dengan mendaftar, kamu menyetujui <span>Syarat Layanan</span> dan <span>Kebijakan Privasi</span> kami.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;