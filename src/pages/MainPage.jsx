import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import UserDataContext from "../context/UserDataContext";
import { useHistory } from "react-router-dom";

import '../styles/MainPage.css';

export default function MainPage() {
  const context = useContext(UserDataContext);
  console.log(context);
  const [date, setDate] = useState({});
  const [pts, setPts] = useState(0);

  const test = localStorage.getItem('app');
  const history = useHistory();

  useEffect(()  => {
    Axios.post("http://localhost:3001/updates", {
      idUsuario: test,
    }).then((response) => {
      setDate(response.data[0]);
    });
    Axios.post("http://localhost:3001/pontos", {
      idUsuario: test,
    }).then((response) => {
      const pstInicial = Object.values(response.data[0]);
      setPts(pstInicial);
    });
  }, [test, pts]);

  const handleClick = () => {
    Axios.post("http://localhost:3001/ponto", {
      idUsuario: test,
    }).then((response) => {
      if (response.data.msg === 'Total') {
        alert("Você atingiu a pontuação máxia do dia");
        history.push('/watchVieos');
      }
      if (response.data.msg === 'Ponto incrementado') {
        history.push('/watchVieos');
      }
    });
    Axios.post("http://localhost:3001/pontos", {
      idUsuario: test,
    }).then((response) => {
      const pstInicial = Object.values(response.data[0])
      setPts(pstInicial);
    });
  }

  return (
    <div className="body-main-page">
      <header className="header-main-page">
        <h4 className="name-main-page">Olá {date.nome}</h4>
        <p className="pts-main-page">{ pts * 9.5 } pts</p>
      </header>
      <div className="main-main-page">
        <img src="" alt="" />
        <div className="container-main-page">
          <p>1.715</p>
          <p>Meta de trocar</p>
          <div>
            <div></div>
          </div>
        </div>
        <button>Quero trocar meus pontos</button>
        <button>Compartilhar com os amigos</button>
        <button onClick={ () => handleClick() }>Assistir vídeos</button>
      </div>
    </div>
  )
}