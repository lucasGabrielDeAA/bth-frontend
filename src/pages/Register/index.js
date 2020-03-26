import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import logo from "../../assets/logo.svg";

import api from '../../services/api';

import "./styles.css";

export default function Register() {
  const history = useHistory();

  const [data, setData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: '',
    uf: '',
  });

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await api.post('/ongs', data);

      toast.success(`Seu token de acesso ${response.data.token}`);

      history.push('/');
    } catch (error) {
      toast.error('Erro ao registrar ONG');
    }
  }

  function handleChangeInput(name, value) {
    setData({ ...data, [name]: value });
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos de sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input placeholder="Nome da ONG" value={data.name} onChange={e => handleChangeInput('name', e.target.value)} />
          
          <input type="email" placeholder="E-mail" value={data.email} onChange={e => handleChangeInput('email', e.target.value)} />
          
          <input placeholder="WhatsApp" value={data.whatsapp} onChange={e => handleChangeInput('whatsapp', e.target.value)} />
          
          <div className="input-row">
            <input placeholder="Cidade" value={data.city} onChange={e => handleChangeInput('city', e.target.value)} />
            <input placeholder="UF" style={{ width: 80 }} value={data.uf} onChange={e => handleChangeInput('uf', e.target.value)} />
          </div>

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
