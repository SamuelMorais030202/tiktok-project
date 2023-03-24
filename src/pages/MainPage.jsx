import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import UserDataContext from "../context/UserDataContext";
import { useHistory } from "react-router-dom";

export default function MainPage() {
  const context = useContext(UserDataContext);
  console.log(context);
  const [date, setDate] = useState({});
  const [pts, setPts] = useState(0);
  const [verification, setVerification] = useState(false);

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
        setVerification(true);
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
    <div>
      <header>
        <h5>Olá {date.nome}</h5>
        <p>{ pts } pts</p>
      </header>
      <div>
        <img src="" alt="" />
        <div>
          <p>1.715</p>
          <p>Meta de trocar</p>
          <div>
            <div></div>
          </div>
        </div>
        <button>Quero trocar meus pontos</button>
        <button>Compartilhar com os amigos</button>
        <button onClick={ () => handleClick() }>Assistir vídeos</button>
        { verification ? 'Você só pode clicar novamente amanham' : null }
      </div>
    </div>
  )
}