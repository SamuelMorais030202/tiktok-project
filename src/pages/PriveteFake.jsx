import React from 'react';

import '../styles/Privete.css'
import imgParabens from '../images/logoPara.png'
import { useHistory } from 'react-router-dom';

export default function PriveteFake(props) {
  const history = useHistory();

  const redirectToEmail = () => {
    window.location.href = "mailto:premiumsuportetiktok@gmail.com";
  }

  const newGame = () => {
    history.push(`/simulation/${props.match.params.id}`);
  }

  return (
    <div className="container-privete-main">
      <div className="conteudo-privete-video">
        <header className="header-privete">
          <h4 className="name-privete">
            Olá
            {'  '}
            Adiministrador
          </h4>
          <p className="pts-privete">
            { props.match.params.id * 7.5 }
            {' '}
            pts
          </p>
        </header>
          <h1 className="title-video-privete">Parabéns...</h1>
          <img className="imgPrevete" src={imgParabens} alt="imagem de parabens" />
          <div className="conteudo-text">
            <div className="text-cell">
              <h4 className="text-instrution">Você atingiu a pontuação maxima, para resgatar seu prêmio siga os seguintes passos:</h4>
              <br />
              <div className="div-regras">
                <p>- Tire print desta tela</p>
                <p>- Mande no Email: premiumsuportetiktok@gmail.com</p>
              </div>
            </div>
            <div className="classButton">
              <a href="https://www.tiktok.com/pt-BR" target="_blank" rel="noreferrer">
              <button className="button-video" onClick={ () => redirectToEmail() }>Abrir Email!</button>
              </a>
                <div className="alert-video-text">
                  <p className="name-user">Após receber seu prêmio continue Assistindo, e continue resgatando seus premios;</p>
                </div>
                <button className="button-video" onClick={ () => newGame() }>Jogue Novamente</button>
            </div>
          </div>
      </div>
    </div>
  );
}