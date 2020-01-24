const LivroController = require('./LivroController');

const template = require('../views/templates');

class BaseController{

    static routes(){
        return {
            home: '/',
            login: '/login'
        };
    }

    home(){
        return (req, res) =>{
            res.marko(template.base.home);
        }

    }

    login(){
        return (req, res) => {
            res.marko(template.base.login);
        }
    }

    efetuaLogin(){
        return (req, res, next) => {

            const passport = req.passport;

            passport.authenticate('local', (erro, usuario, info) => {
                if(info){
                    return res.marko(templates.base.login)
                }

                if (erro) {
                    return next(erro);
                }

                req.login(usuario, (erro) => {
                    if (erro) {
                        return next(erro);
                    }

                    return res.redirect(LivroController.routes().lista);
                })
            })(req, res, next);

        }
    }

}

module.exports = BaseController;