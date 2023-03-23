import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import UserDataContext from "../context/UserDataContext";

export default function MainPage() {
  const context = useContext(UserDataContext);
  console.log(context);
  const [date, setDate] = useState({});

  const test = localStorage.getItem('app');

  useEffect(()  => {
    Axios.post("http://localhost:3001/updates", {
      idUsuario: test,
    }).then((response) => {
      console.log(response);
      setDate(response.data[0]);
    });
  }, [test]);

  return (
    <div>
      <header>
        <h5>Olá {date.email}</h5>
        <p>1.715</p>
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
        <button>Assistir vídeos</button>
      </div>
    </div>
  )
}