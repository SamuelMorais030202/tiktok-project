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
      // res.send(result);
      bcrypt.compare(password, result[0].senha, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado", name: result[0].nome, id: result[0].idUsuario });
        } else {
          res.send({ msg: "Usuário ou senha incorreta!" });
        }
      });
    } else {
      res.send({ msg: "Usuário ou senha incorreta!" });
    }
  });
});

app.post("/updates", (req, res) => {
  const idUsuario = req.body.idUsuario;

  db.query("SELECT * FROM usuario WHERE idUsuario = ?", [idUsuario], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/pontos", (req, res) => {
  const idUsuario = req.body.idUsuario;

  db.query("SELECT count(*) FROM ponto WHERE fkUsuario = ?", [idUsuario], (err, result) => {
    if (result < 1) {
      res.send("0 pontos");
    } else {
      res.send(result);
    }
  });
});


app.post("/ponto", (req, res) => {
  const idUsuario = req.body.idUsuario;
  db.query("SELECT count(*) FROM ponto WHERE fkUsuario = ? AND dataHora BETWEEN CONCAT(curdate(),' 00:00:00') AND CONCAT(curdate(),' 23:59:59')", [idUsuario], (err, result) => {
    if (result.length >= 0 && result.length < 3) {
          db.query("INSERT INTO ponto (fkUsuario) VALUE (?)",[idUsuario],(error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Ponto incrementado" });
          }
        );
    } else {
      res.send("0 pontos")
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
