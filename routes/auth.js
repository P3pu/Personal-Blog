import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url) // obtém o caminho resolvido para o arquivo 
const __dirname = path.dirname(__filename) // obtém o nome do diretório

const router = express.Router() // corrected router initialization

router.post('/auth', (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.redirect('/guest.html');
    }
  
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');

    if (username === 'admin' && password === '1234') {
        return res.redirect('/admin.html');
    } else {
        return res.redirect('/guest.html');
    }
});

export default router;