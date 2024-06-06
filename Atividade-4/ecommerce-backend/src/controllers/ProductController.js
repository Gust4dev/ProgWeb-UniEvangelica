/*
 * Curso de Engenharia de Software - UniEVANGÉLICA
 * Disciplina de Programação Web
 * Dev: Gustavo Gomes dos Santos - 2111267
 * 06/06/2024
 */


const Product = require('../models/Product');

// Função para criar um novo produto
exports.createProduct = async (req, res) => {
    const { name, price, description } = req.body;
    try {
        // Cria uma nova instância de produto
        const newProduct = new Product({ name, price, description });
        // Salva o produto no banco de dados
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Função para obter todos os produtos
exports.getProducts = async (req, res) => {
    try {
        // Busca todos os produtos no banco de dados
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
