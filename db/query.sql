Return count register the user during day

SELECT count(*) FROM pontos WHERE fkUsuario= 1 AND dataHora BETWEEN CONCAT(curdate(),' 00:00:00') AND CONCAT(curdate(),' 23:59:59');
