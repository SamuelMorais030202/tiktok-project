import React, { useContext } from "react";
import UserDataContext from "../context/UserDataContext";

export default function MainPage() {
  const context = useContext(UserDataContext);

  return (
    <div>
      <header>
        <h5>Olá { context.userData.id }</h5>
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