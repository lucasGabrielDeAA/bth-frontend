import React from "react";
import { ToastContainer } from 'react-toastify';

import "./styles/toast.css";
import "./global.css";

import Routes from "./routes";

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
