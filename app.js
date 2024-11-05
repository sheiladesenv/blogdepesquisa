const express = require('express'); 
// Importa o módulo express, um framework para criar aplicativos web em Node.js.

const bodyParser = require('body-parser'); 
// Importa o módulo body-parser para manipular dados do corpo de requisições HTTP.

const path = require('path'); 
// Importa o módulo path para manipular caminhos de arquivos e diretórios.

const conexao = require('./conexaoblog'); 
// Importa a conexão com o banco de dados a partir do arquivo conexaoblog.js.

const app = express(); 
// Cria uma instância do aplicativo Express.

app.set('view engine', 'ejs'); 
// Configura o EJS como o motor de visualização para renderizar templates HTML.

app.set('views', path.join(__dirname, 'views')); 
// Define o diretório onde os templates EJS estão localizados.

app.use(express.static(path.join(__dirname, 'public'))); 
// Configura o middleware para servir arquivos estáticos a partir do diretório 'public'.

app.use(bodyParser.urlencoded({ extended: true })); 
// Configura o middleware body-parser para analisar dados URL-encoded do corpo de requisições HTTP.

app.get('/', (req, res) => {
    res.render('cadastro'); 
    // Rota para a página principal que renderiza o template 'cadastro.ejs'.
});

app.get('/video', (req, res) => {
    res.render('video'); 
    // Rota para a página de vídeo que renderiza o template 'video.ejs'.
});

app.post('/submit', (req, res) => {
    const { nome, sobrenome, email, opiniao } = req.body; 
    // Desestrutura os dados enviados pelo formulário.
    
    const sql = 'INSERT INTO cadastro (nome, sobrenome, email, opiniao) VALUES (?, ?, ?, ?)'; 
    // Define a consulta SQL para inserir dados na tabela 'cadastro'.

    conexao.query(sql, [nome, sobrenome, email, opiniao], (err, result) => {
        if (err) throw err; 
        // Lança um erro se a consulta falhar.
        
        res.send('Opinião registrada com sucesso!'); 
        // Envia uma mensagem de sucesso ao cliente.
    });
});

const PORT = process.env.PORT || 3000; 
// Define a porta do servidor, usando a variável de ambiente PORT ou 3000.

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); 
    // Inicia o servidor e exibe uma mensagem no console indicando em qual porta está rodando.
});
