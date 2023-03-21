import React from "react";
import { useHistory } from "react-router-dom";

export default function Login (){
  const history = useHistory();

  return (
    <div>
      <h1>Bem vindo!</h1>
      <div>
        <label htmlFor="email">
          <input type="text" name="email" id="email" placeholder="E-mail" />
        </label>
        <label htmlFor="password">
          <input type="text" name="password"id="password" placeholder="Senha" />
        </label>
        <p>Esqueci minha senha</p>
        <button>Entrar</button>
      </div>
      <div>
        <button onClick={ () => history.push('/new-user')}>Novo usuário? clique aqui.</button>
        <p>Política de Privacidade</p>
        <p>Termos de Uso</p>
      </div>
    </div>
  );
}