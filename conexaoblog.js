const mysql = require('mysql');
// Importa o módulo 'mysql' para interagir com o banco de dados MySQL.

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blogdepesquisa'
});
// Cria uma conexão com o banco de dados MySQL especificando o host, usuário, senha e nome do banco de dados.

conexao.connect((err) => {
  if (err) throw err;
  // Tenta conectar ao banco de dados. Se ocorrer um erro, lança o erro.
  
  console.log('Conectado ao banco de dados!');
  // Se a conexão for bem-sucedida, imprime uma mensagem no console indicando que a conexão foi estabelecida.
});

module.exports = conexao;
