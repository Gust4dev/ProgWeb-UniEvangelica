/*
 * Curso de Engenharia de Software - UniEVANGÉLICA
 * Disciplina de Programação Web
 * Dev: Gustavo Gomes dos Santos - 2111267
 * 06/06/2024
 */


const Order = require('../models/Order');

// Função para criar uma nova ordem de serviço
exports.createOrder = async (req, res) => {
    const { user, products, total } = req.body;
    try {
        // Cria uma nova instância de ordem de serviço
        const newOrder = new Order({ user, products, total });
        // Salva a ordem no banco de dados
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Função para obter todas as ordens de serviço
exports.getOrders = async (req, res) => {
    try {
        // Busca todas as ordens no banco de dados e popula os campos referenciados
        const orders = await Order.find().populate('user').populate('products.product');
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
