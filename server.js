const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "162.241.2.41",
  user: "tiflat68_tiktok",
  password: ",~h(7;^.!I5P",
  database: "tiflat68_tiktok",
});

app.use(express.json());
app.use(cors());


app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuario WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }

    if (result.length === 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuario (email, senha) VALUE (?,?)",
          [email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuario WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      console.log('Usuário encontrado')
      console.log(result);
      // res.send(result);
      bcrypt.compare(password, result[0].senha, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado" });
        } else {
          res.send({ msg: "Usuário ou senha incorreta!" });
        }
      });
    } else {
      res.send({ msg: "Usuário ou senha incorreta!" });
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});