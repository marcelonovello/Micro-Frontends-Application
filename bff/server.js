const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path'); 
const app = express();

dotenv.config();
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.YOUTUBE_API_KEY;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/videos', async (req, res) => {
    try {
        const { q } = req.query;
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q,
                key: API_KEY,
                type: 'video',
                maxResults: 10
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
        res.status(500).json({ error: 'Falha ao buscar vídeos' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

if (process.env.NODE_ENV !== 'test') {
    const server = app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}

module.exports = app;
