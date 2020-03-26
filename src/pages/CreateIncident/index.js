import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

import api from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';

import logo from "../../assets/logo.svg";

import "./styles.css";

export default function CreateIncident() {
  const history = useHistory();

  const [data, setData] = useState({
    title: '',
    description: '',
    value: '',
  });

  function handleChengeInput(name, value) {
    setData({ ...data, [name]: value });
  }

  async function handleCreateNewIncident(e) {
    e.preventDefault();

    try {
      await api.post('/incidents', data);

      toast.success('Caso cadastrado com sucesso');
      history.push('/profile');
    } catch (error) {
      toast.error('Erro ao cadastrar caso');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>

        <form onSubmit={handleCreateNewIncident}>
          <input placeholder="Título" value={data.title} onChange={e => handleChengeInput('title', e.target.value)} />
          <textarea placeholder="Descrição" value={data.description} onChange={e => handleChengeInput('description', e.target.value)} />
          <input placeholder="Valor em R$" value={data.value} onChange={e => handleChengeInput('value', e.target.value)} />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
