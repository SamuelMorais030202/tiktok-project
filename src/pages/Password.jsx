import React, { useState } from 'react';
import Axios from 'axios';
import '../styles/Password.css';
import { useHistory } from 'react-router-dom';

export default function Password() {
  const [dateUser, setDateUser] = useState({
    emailNewUser: '',
    cpfNewUser: '',
  });

  const history = useHistory();

  const handelChange = ({ target }) => {
    setDateUser({
      ...dateUser,
      [target.name]: target.value,
    })
  };

  const handleClick = () => {
    const validate = dateUser.emailNewUser.includes('@')
      && dateUser.emailNewUser.includes('.com') && dateUser.cpfNewUser.length === 11
    if (validate) {
      Axios.post("http://localhost:3004/esqueciSenha", {
        email: dateUser.emailNewUser,
      })
      alert("Senha enviada, verifique seu email");
      history.push('/');
    } else {
      alert("Email ou cpf inválido");
    }
  }

  return (
    <div className="body-passord-page">
      <h1>Preencha os dados para recuperar sua senha!</h1>
      <div className="main-passord-page">
        <label htmlFor="email">
          <input
            className="input-registray-email"
            type="email"
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

        <button type='button' onClick={ () => handleClick() }>Recuperar senha</button>
      </div>
    </div>
  );
}