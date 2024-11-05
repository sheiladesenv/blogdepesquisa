-- Criação do banco de dados
CREATE DATABASE blogdepesquisa;


-- Criação da tabela `familia`
CREATE TABLE cadastro (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  sobrenome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  opiniao VARCHAR (1000) NOT NULL,
  creat_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
--Execute um comando SELECT * FROM familia; para verificar se o novo usuário foi adicionado corretamente
-- Inserção de dados na tabela `familia`
INSERT INTO cadastro(nome, sobrenome, email, opiniao) 
VALUES ("Erika", "Ribeiro Vieira", "erica@hotmail.com", "Acho que as mulheres são formidaveis");
