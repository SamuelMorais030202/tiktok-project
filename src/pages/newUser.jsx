import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function NewUser() {
  const [dateUser, setDateUser] = useState({
    nameNewUser: '',
    emailNewUser: '',
    cpfNewUser: '',
    WhatsappNewUser: '',
    cdNewUser: '',
    passwordNewUser: '',
  });

  const history = useHistory();

  const handelChange = ({ target }) => {
    setDateUser({
      ...dateUser,
      [target.name]: target.value,
    })
  };

  const handleClick = () => {

    Axios.post("http://localhost:3001/register", {
      email: dateUser.emailNewUser,
      password: dateUser.passwordNewUser,
    }).then((response) => {
      alert(response.data.msg);
      if (response.data.msg === 'Usuário cadastrado com sucesso') {
        history.push('/about');
      } else if (response.data.msg === 'Email já cadastrado') {
        history.push('/');
      }
    });

  }

  const validatePassword = dateUser.passwordNewUser.length > 3;
  const validateWahts = dateUser.WhatsappNewUser.length > 8;
  const validateName = dateUser.nameNewUser.length > 2;
  const validateCd = dateUser.cdNewUser.length === 4;
  const validateCpf = dateUser.cpfNewUser.length === 11;
  const validateEmail = dateUser.emailNewUser.includes("@") && dateUser.emailNewUser.includes('.com');
  const validate = validateName && validateEmail && validateCpf && validateWahts && validatePassword && validateCd;

  return (
    <div>
      <h1>New User</h1>
      <div>
        <label htmlFor="name">
          <input
            type="text"
            value={dateUser.nameNewUser}
            name="nameNewUser"
            id="name"
            placeholder="name"
            onChange={(e) => handelChange(e)}
          />
        </label>
        <label htmlFor="email">
          <input
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
            type="number"
            value={dateUser.cpfNewUser}
            name="cpfNewUser"
            id="cpf"
            placeholder="CPF"
            onChange={(e) => handelChange(e)}
          />
        </label>
        <label htmlFor="watss">
          <input
            type="number"
            value={dateUser.WhatsappNewUser}
            name="WhatsappNewUser"
            id="watss"
            placeholder="Whatsapp"
            onChange={(e) => handelChange(e)}
          />
        </label>
        <label htmlFor="cd">
          <input
            type="number"
            value={dateUser.cdNewUser}
            name="cdNewUser"
            id="cd"
            placeholder="Código de compra"
            onChange={(e) => handelChange(e)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            value={dateUser.passwordNewUser}
            name="passwordNewUser"
            id="password"
            placeholder="Senha"
            onChange={(e) => handelChange(e)}
          />
        </label>
        <button
          type="button"
          disabled={!validate}
          onClick={handleClick}
        >
          Cadastrar
        </button>
      </div>
    </div>
  )
}