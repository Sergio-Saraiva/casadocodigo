const { check } = require('express-validator/check');

class Livro{
    static validacoes(){
        return [
            check('titulo').isLength({ min: 5 }).withMessage('Titulo precisa ter no minimo 5 catacteres!'),
            check('preco').isCurrency().withMessage('Preço precisa ter um valor monetário válido!')
        ]
    }
}

module.exports = Livro;