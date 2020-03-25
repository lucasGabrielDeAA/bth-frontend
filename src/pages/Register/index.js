import React from "react";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from "../../assets/logo.svg";

import "./styles.css";

export default function Register() {
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

        <form>
          <input type="text" placeholder="Nome da ONG" />
          
          <input type="email" placeholder="E-mail" />
          
          <input placeholder="WhatsApp" />
          
          <div className="input-row">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
