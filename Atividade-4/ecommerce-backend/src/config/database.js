/*
 * Curso de Engenharia de Software - UniEVANGÉLICA
 * Disciplina de Programação Web
 * Dev: Gustavo Gomes dos Santos - 2111267
 * 06/06/2024
 */

const mongoose = require("mongoose");

// Função assíncrona para conectar ao banco de dados MongoDB
const connectDB = async () => {
  try {
    // Conexão ao banco de dados com opções de configuração
    await mongoose.connect("mongodb://localhost:27017/ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    // Encerra o processo em caso de falha na conexão
    process.exit(1);
  }
};

module.exports = connectDB;
