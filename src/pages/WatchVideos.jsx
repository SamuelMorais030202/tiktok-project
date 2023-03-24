import React from "react";
import { useHistory } from "react-router-dom";
import '../styles/WatchVideos.css'
import imageFundNull from '../images/logoSemFundo.png'

export default function WatchVideos (){

  return (
    <div className="container-videos-main">
      <div className="conteudo-video">
        <img className="imgNullFund" src={ imageFundNull } alt="logo" />
        <h1 className="title-video">Falta pouco...</h1>
        <div className="conteudo-text">
          <div className="text-cell">
            <h4>Para começar a ganhar clique no botão abaixo para ir ao TikTok e assista seus vídeos.</h4>
          </div>
          <div className="classButton">
            <button>Abrir Tiktok!</button>
              <div className="alert-video-text">
                <p className="name-user">È necessário deixar esta aba e navegador abertos!!</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}