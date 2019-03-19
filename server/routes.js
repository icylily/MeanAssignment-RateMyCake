const RateCakeCotroller = require('./controllers');

module.exports = app => {

    app
        .get('/api/cakes', RateCakeCotroller.getAllCake)
        .get('/api/cakes/:id', RateCakeCotroller.getOneCake)
        .post('/api/cakes', RateCakeCotroller.createCake)
        .put('/api/cakes/:id', RateCakeCotroller.updateCake)
        .delete('/api/cakes/:id', RateCakeCotroller.deletecake)
        .post('/api/rates/:id', RateCakeCotroller.createRate)
}