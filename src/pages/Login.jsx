import React from "react";

export default function Login (){
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
        <h3>Novo usuário? clique aqui.</h3>
        <p>Política de Privacidade</p>
        <p>Termos de Uso</p>
      </div>
    </div>
  );
}