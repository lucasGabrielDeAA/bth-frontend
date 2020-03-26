import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { toast } from 'react-toastify';

import logo from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";

import api from '../../services/api';

import "./styles.css";

export default function Login() {
  const history = useHistory();
  const [token, setToken] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { token });

      await localStorage.setItem('auth_token', response.data.token);
      await localStorage.setItem('ong_name', response.data.name);
      history.push('/profile');
    } catch (error) {
      toast.error('Erro ao se autenticar, tente novamente');
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Logo" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input placeholder="Seu Token" value={token} onChange={e => setToken(e.target.value)} />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho registro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes" />
    </div>
  );
}
