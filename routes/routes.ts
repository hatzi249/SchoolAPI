const expressRouter = require('express');
const crud = require('../controllers/crudController');

function routes() {
    const router = expressRouter.Router();
    const controller = crud();

    const query = (sp:string) => {
        return async function (req:any, res:any) {
            req.sql = { sp }
            await controller.crud(req, res);
        }
    }

    router.route('/teachers')
        .get(query('GetTeachers'))
        .post(query('AddTeacher'))

    router.route('/teachers/:Id')
        .get(query('GetTeacher'))
        .put(query('UpdateTeacher'))
        .delete(query('DeleteTeacher'))

    router.route('/classes')
        .get(query('GetClasses'))

    router.route('/carts')
        .get(query('GetCarts'))

    router.route('/carts/:CustomerId')
        .get(query('GetCart'))
 

        return router;
};

module.exports = routes;