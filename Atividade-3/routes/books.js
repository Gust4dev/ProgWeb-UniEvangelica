// * Curso de Engenharia de Software - UniEVANGÉLICA
// * Disciplina de Programação Web
// * Dev: Gustavo Gomes dos Santos
// * 23/05/2024

const express = require("express");
const router = express.Router();

let books = [];

// funcoes da API 

router.get("/", (req, res) => {
  res.json(books);
});

router.post("/", (req, res) => {
  const newBook = req.body; //inicia funcao de criar um livro
  newBook.id = books.length + 1; //coloca id automatico 
  books.push(newBook); //posta o livro
  res.status(201).json(newBook); //informa se foi com sucesso ou nao
});

//a maioria e basicamente a mesma coisa entao vou comentar so os diferentes

router.get("/:book_id", (req, res) => {
  const bookId = parseInt(req.params.book_id, 10);
  const book = books.find((b) => b.id === bookId); //procura o livro para o get
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Livro não encontrado");
  }
});

router.put("/:book_id", (req, res) => {
  const bookId = parseInt(req.params.book_id, 10);
  const bookIndex = books.findIndex((b) => b.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = { ...books[bookIndex], ...req.body };
    res.json(books[bookIndex]);
  } else {
    res.status(404).send("Livro não encontrado");
  }
});

router.delete("/:book_id", (req, res) => {
  const bookId = parseInt(req.params.book_id, 10);
  const bookIndex = books.findIndex((b) => b.id === bookId);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Livro não encontrado");
  }
});

module.exports = router;
