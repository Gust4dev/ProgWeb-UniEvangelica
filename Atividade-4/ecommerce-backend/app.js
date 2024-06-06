/*
 * Curso de Engenharia de Software - UniEVANGÉLICA
 * Disciplina de Programação Web
 * Dev: Gustavo Gomes dos Santos
 * 06/06/2024
 */

const express = require("express");
const connectDB = require("./config/database");

const app = express();

// Conecta ao banco de dados
connectDB();

// Define as rotas principais
app.use("/api", require("./routes"));

module.exports = app;
