import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";

import logo from "../../assets/logo.svg";

import "./styles.css";

export default function Profile() {
  const name = localStorage.getItem("ong_name");
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/incidents/ong");

      setIncidents(response.data);
    }

    loadData();
  }, []);

  async function handleRemoveIncident(id) {
    try {
      await api.delete(`/incidents/${id}`);

      setIncidents(incidents.filter(incident => incident.id !== id));

      toast.success('Caso removido com sucesso');
    } catch (error) {
      toast.error('Erro ao remover caso');
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>{`Bem vindo, ${name}`}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <b>Caso:</b>
            <p>{incident.title}</p>

            <b>Descrição:</b>
            <p>{incident.description}</p>

            <b>Valor</b>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button type="button" onClick={() => handleRemoveIncident(incident.id)}>
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
