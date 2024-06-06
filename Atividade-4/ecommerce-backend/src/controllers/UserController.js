/*
 * Curso de Engenharia de Software - UniEVANGÉLICA
 * Disciplina de Programação Web
 * Dev: Gustavo Gomes dos Santos - 2111267
 * 06/06/2024
 */

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Função para registrar um novo usuário
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Verifica se o usuário já existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }
        // Cria uma nova instância de usuário
        user = new User({ name, email, password });
        // Salva o usuário no banco de dados
        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Função para login do usuário
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Verifica se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        // Compara a senha fornecida com a armazenada no banco de dados
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        // Cria um payload com o ID do usuário
        const payload = { user: { id: user.id } };
        // Gera um token JWT e o envia ao cliente
        jwt.sign(payload, 'yourSecretKey', { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
