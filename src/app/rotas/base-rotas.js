const BaseController = require('../controllers/BaseController');
const baseController = new BaseController();

module.exports = (app) =>{

    const rotasBase = BaseController.routes();
    app.get(rotasBase.home, baseController.home());

    app.route(rotasBase.login)
        .get(baseController.login())
        .post(baseController.efetuaLogin());

}
