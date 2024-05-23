/*
 * Curso de Engenharia de Software - UniEVANGÉLICA
 * Disciplina de Programação Web
 * Dev: Gustavo Gomes dos Santos
 * 23/05/2024
 */
// arquvio de configuracao para iniciar servidor na porta 3000

const express = require("express");
const app = express();
const booksRouter = require("./routes/books");

app.use(express.json());
app.use("/api/books", booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
