/*
 * Curso de Engenharia de Software - UniEVANGÉLICA
 * Disciplina de Programação Web
 * Dev: Gustavo Gomes dos Santos - 2111267
 * 06/06/2024
 */

const express = require('express');
const connectDB = require('./config/database');

const app = express();

// Conecta ao banco de dados
connectDB();

// Inicializa o middleware para análise do corpo da requisição
app.use(express.json({ extended: false }));

// Define as rotas principais
app.use('/api', require('./routes'));

const PORT = process.env.PORT || 5000;

// Inicia o servidor
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
