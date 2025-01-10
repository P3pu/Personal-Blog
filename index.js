import express from 'express';
import authRoutes from './routes/auth.js';
import path from 'path';
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url) // obtém o caminho resolvido para o arquivo 
const __dirname = path.dirname(__filename) // obtém o nome do diretório

const app = express()
const port = 3000;

app.use(express.json());
// middleware 
app.use(express.static(path.join(__dirname, 'public')))

// Middleware para usar as rotas de autenticação
app.use(authRoutes);

// rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.listen(port, () => {
    console.log('Haja Luz!')
})