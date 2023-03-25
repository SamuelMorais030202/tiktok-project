import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import UserDataContext from "../context/UserDataContext";
import { useHistory } from "react-router-dom";
import copy from 'clipboard-copy'; // Importando clipboard-copy

import '../styles/MainPage.css';
import imageFundNull from '../images/logoSemFundo.png'

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

  const handleCopyClick = () => {
    copy('https://secure.doppus.com/pay/PZ0008MZ0008GZOHOBB');
    alert("Link copiado para a área de transferência!");
    Axios.post("http://localhost:3001/compartilhar", {
      idUsuario: test,
    }).then((response) => {
      alert(response.data.msg);
    });
  }

  return (
    <div className="body-main-page">
      <header className="header-main-page">
        <h4 className="name-main-page">
          Olá
          {'  '}
          {date.nome}
        </h4>
        <p className="pts-main-page">
          { pts * 9.5 }
          {' '}
          pts
        </p>
      </header>
      <div className="main-main-page">
        <img src={ imageFundNull } alt="logo" className="imgNullFund" />
        <div className="container-main-page">
          <div className="description-main-page">
            <p>{ pts * 9.5 } pts</p>
            <p className="meta-main-page">Meta de troca</p>
          </div>
          <div className="bara-main-page">
            <div className="pts-user-main-page" style={ { width: `${pts * 9.5}px` } }></div>
          </div>
        </div>
        <div className="buttons-main-page">
          <button className="trocar-pontos-main-page">Quero trocar meus pontos</button>
          <button className="compartilhar-main-page" onClick={ () =>  handleCopyClick() }>Compartilhar com os amigos</button>
          <button className="assistir-main-page" onClick={ () => handleClick() }>Assistir vídeos</button>
        </div>
      </div>
    </div>
  )
}