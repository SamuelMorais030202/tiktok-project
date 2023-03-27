import React, { useEffect, useState } from "react";
import '../styles/WatchVideos.css'
import Axios from "axios";
import '../styles/Privete.css'
import imgParabens from '../images/logoPara.png'
import { useHistory } from "react-router";

export default function Privete (){
  const [date, setDate] = useState({});
  const [pts, setPts] = useState(0);

  const history = useHistory();

  const test = localStorage.getItem('app');
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

  const redirectToEmail = () => {
    window.location.href = "mailto:premiumsuportetiktok@gmail.com";
  }

  const newGame = () => {
    Axios.post("http://localhost:3001/reset", {
      idUsuario: test,
    });
    history.push('/about');
  }

  return (
    <div className="container-privete-main">
      {
        pts[0] === 40
        ? (
          <div className="conteudo-privete-video">
          <header className="header-privete">
            <h4 className="name-privete">
              Olá
              {'  '}
              {date.nome}
            </h4>
            <p className="pts-privete">
              { pts * 7.5 }
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
              <button onClick={redirectToEmail} className="button-video">Abrir Email!</button>
              </a>
                <div className="alert-video-text">
                  <p className="name-user">Após receber seu prêmio continue Assistindo, e continue resgatando seus premios;</p>
                </div>
                <button onClick={ () => newGame() } className="button-video">Jogue Novamente</button>
            </div>
          </div>
        </div>
        ) : <h1>Você ainda não atingiu a pontuação necessária</h1>
      }
    </div>
  );
}