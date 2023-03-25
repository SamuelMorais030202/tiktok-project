import React, { useState } from 'react';
import '../styles/Password.css';

export default function Password() {
  const [dateUser, setDateUser] = useState({
    emailNewUser: '',
    cpfNewUser: '',
  });

  const handelChange = ({ target }) => {
    setDateUser({
      ...dateUser,
      [target.name]: target.value,
    })
  };

  const handleClick = () => {
    alert("Sua senha foi enviada no seu email")
  }

  return (
    <div className="body-passord-page">
      <h1>Preencha os dados para recuperar sua senha!</h1>
      <div className="main-passord-page">
        <label htmlFor="email">
          <input
            className="input-registray-email"
            type="text"
            value={dateUser.emailNewUser}
            name="emailNewUser"
            id="email"
            placeholder="email"
            onChange={(e) => handelChange(e)}
          />
        </label>
        <label htmlFor="cpf">
          <input
            className="input-registray-cpf"
            type="number"
            value={dateUser.cpfNewUser}
            name="cpfNewUser"
            id="cpf"
            placeholder="CPF"
            onChange={(e) => handelChange(e)}
          />
        </label>

        <button onClick={ () => handleClick() }>Recuperar senha</button>
      </div>
    </div>
  );
}