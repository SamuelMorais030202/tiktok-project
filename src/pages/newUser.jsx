import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import '../styles/NewUser.css'

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
        history.push('/');
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
    <div className="div-pai">
      <div className="div-filho">
      <div className="inputs">
      <h1 className="title-h1">Preencha os campos abaixo para efetuar seu cadastro:</h1>
        <div className="p-msg">
        <p className="msg-title">Obs: verifique se todos os campos estão corretos!</p>
        </div>
        <label htmlFor="name">
          <input
            className="input-registray-name"
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
        <label htmlFor="watss">
          <input
            className="input-whats"
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
            className="codigo-valid"
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
            className="senha"
            type="password"
            value={dateUser.passwordNewUser}
            name="passwordNewUser"
            id="password"
            placeholder="Senha"
            onChange={(e) => handelChange(e)}
          />
        </label>
        <label className="input-terms">
          <input type="checkbox" name="concorda" id="id-terms" />
          Eu li e concordo com as Políticas de Privacidade e os Termos de Uso.
        </label>
        <div className="text-container">
        <p className="alert-text">O botão de cadastro só ficará disponível após inserir o código de compra correto!</p>
        </div>
        <button
          className="button-cadastrar"
          type="button"
          disabled={!validate}
          onClick={handleClick}
        >
          CADASTRAR
        </button>
      </div>
      </div>
    </div>
  )
}