const LivroController = require('../controllers/LivroController');
const livroController = new LivroController();

const BaseController = require('../controllers/BaseController')

const Livro = require('../models/Livro');

module.exports = (app) =>{
    const rotasLivro = LivroController.routes();

    app.use(rotasLivro.autenticadas, (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        }else{
            res.redirect(BaseController.routes().login)
        }

    });

    
    app.get(rotasLivro.lista, livroController.lista());

    
    app.route(rotasLivro.cadastro)
        .get(livroController.renderForm())
        .post(Livro.validacoes(), livroController.adiciona())
        .put(livroController.edita());

    app.get(rotasLivro.edicao, livroController.renderFormEdit())

    app.delete(rotasLivro.delecao, livroController.deleta())

}
