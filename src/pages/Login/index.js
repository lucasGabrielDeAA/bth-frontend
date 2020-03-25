import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import heroesImage from "../../assets/heroes.png";

import "./styles.css";

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Logo" />

        <form>
          <h1>Faça seu login</h1>

          <input placeholder="Seu Token" />
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
